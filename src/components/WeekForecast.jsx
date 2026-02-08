import style from '../css/week-forecast.module.css'
import { useEffect, useState } from 'react';


const WeekForecast = () => {
const [data, setData] = useState(null)
  
useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
'https://api.openweathermap.org/data/2.5/forecast?q=Lviv&units=metric&APPID=17901880cf618f6a938a98535f079158'
        );

        if (!res.ok) {
          console.error('errore');
          return;
        }

        const json = await res.json();
        console.log(json);;
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  return <div className={style.weekForecast}>
  <div className={`container ${style.weekForecastContainer}`}>
    <h2 className={style.title}>8-day forecast</h2>
    <ul className={style.list}>
      <li className={style.item}>
        <p className={style.date}></p>
        <div className={style.info}>
          <img src="" alt="" className={style.img}/>
          <p className={style.temp}></p>
        </div>
        <p className={style.weather}></p>
      </li>
      <li className={style.item}>
        <p className={style.date}></p>
        <div className={style.info}>
          <img src="" alt="" className={style.img}/>
          <p className={style.temp}></p>
        </div>
        <p className={style.weather}></p>
      </li>
      <li className={style.item}>
        <p className={style.date}></p>
        <div className={style.info}>
          <img src="" alt="" className={style.img}/>
          <p className={style.temp}></p>
        </div>
        <p className={style.weather}></p>
      </li>
      <li className={style.item}>
        <p className={style.date}></p>
        <div className={style.info}>
          <img src="" alt="" className={style.img}/>
          <p className={style.temp}></p>
        </div>
        <p className={style.weather}></p>
      </li>
      <li className={style.item}>
        <p className={style.date}></p>
        <div className={style.info}>
          <img src="" alt="" className={style.img}/>
          <p className={style.temp}></p>
        </div>
        <p className={style.weather}></p>
      </li>
      <li className={style.item}>
        <p className={style.date}></p>
        <div className={style.info}>
          <img src="" alt="" className={style.img}/>
          <p className={style.temp}></p>
        </div>
        <p className={style.weather}></p>
      </li>
      <li className={style.item}>
        <p className={style.date}></p>
        <div className={style.info}>
          <img src="" alt="" className={style.img}/>
          <p className={style.temp}></p>
        </div>
        <p className={style.weather}></p>
      </li>
      <li className={style.item}>
        <p className={style.date}></p>
        <div className={style.info}>
          <img src="" alt="" className={style.img}/>
          <p className={style.temp}></p>
        </div>
        <p className={style.weather}></p>
      </li>
    </ul>
    </div>
  </div>;
  
};
export default WeekForecast;