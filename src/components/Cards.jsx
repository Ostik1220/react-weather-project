import { useState, useEffect } from 'react';
import refrehsvg from '../img/refresh.svg';
import heartsvg from '../img/heart.svg';
import deletesvg from '../img/delete.svg';
import style from '../css/cards.module.css';

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Rzeszow&units=metric&APPID=17901880cf618f6a938a98535f079158'
        );

        if (!res.ok) {
          console.error('errore');
          return;
        }

        const json = await res.json();
        console.log( json);
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, []);


  useEffect(() => {
    console.log('data changed:', data);
  }, [data]);


const city = data && data.name ? data.name : '';

const country =
  data && data.sys && data.sys.country
    ? data.sys.country
    : '';

const icon =
  data && data.weather && data.weather[0] && data.weather[0].icon
    ? data.weather[0].icon
    : undefined;

  return (
    <div className="container">
      <div className={style.card}>
        <div className={style.position}>
          <h2 className={style.city}>{city}</h2>
          <h2 className={style.country}>{country}</h2>
        </div>
      </div>
      {icon && (
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
      )}
      {/* <svg>
        <use href={refrehsvg}></use>
      </svg> */}
    </div>
  );
};
export default Cards;
