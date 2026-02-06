import { useState, useEffect } from 'react';
import useDateByTimezone from '../hooks';
import refrehsvg from '../img/refresh.svg';
import heartsvg from '../img/heart.svg';
import deletesvg from '../img/delete.svg';
import style from '../css/cards.module.css';
import { Button } from '@mui/material';

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&APPID=17901880cf618f6a938a98535f079158'
        );

        if (!res.ok) {
          console.error('errore');
          return;
        }

        const json = await res.json();
        console.log(json);
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

  const timezoneOffset = data && data.timezone ? data.timezone : 0;

  const country = data && data.sys && data.sys.country ? data.sys.country : '';

  const icon =
    data && data.weather && data.weather[0] && data.weather[0].icon
      ? data.weather[0].icon
      : undefined;

  const needDate = useDateByTimezone(timezoneOffset);
  console.log('Need date:', needDate);
  const time = needDate.toLocaleTimeString('ua-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const weekday = needDate.toLocaleString('en-US', { weekday: 'long' });
  const date = needDate
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    })
    .replaceAll('/', ':');

  return (
    <div className={style.cards}>
      <div className={`container ${style.cardsContainer}`}>
        <div className={style.card}>
          <div className={style.position}>
            <h2 className={style.city}>{city}</h2>
            <h2 className={style.country}>{country}</h2>
          </div>
          <p className={style.time}>{time}</p>
          <Button variant="contained" color="default">
            Hourly forecast
          </Button>

          <div className={style.dateContainer}>
            <p className={style.date}>{date}</p>
            <div className={style.divider}></div>
            <p className={style.weekday}>{weekday}</p>
          </div>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather Icon"
              className={style.img}
            />
          )}

          <h2 className={style.temperature}>
            {data && data.main ? `${Math.round(data.main.temp)}°C` : ''}
          </h2>

          <div className={style.vidgets}>
            <svg className={style.svg}>
              <use href={refrehsvg}></use>
            </svg>
            <svg className={style.svg}>
              <use href={heartsvg}></use>
            </svg>
            <Button variant="contained" color="default">
              See more
            </Button>
            <svg className={style.svg}>
              <use href={deletesvg}></use>
            </svg>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.position}>
            <h2 className={style.city}>{city}</h2>
            <h2 className={style.country}>{country}</h2>
          </div>
          <p className={style.time}>{time}</p>
          <Button variant="contained" color="default">
            Hourly forecast
          </Button>

          <div className={style.dateContainer}>
            <p className={style.date}>{date}</p>
            <div className={style.divider}></div>
            <p className={style.weekday}>{weekday}</p>
          </div>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather Icon"
              className={style.img}
            />
          )}

          <h2 className={style.temperature}>
            {data && data.main ? `${Math.round(data.main.temp)}°C` : ''}
          </h2>

          <div className={style.vidgets}>
            <svg className={style.svg}>
              <use href={refrehsvg}></use>
            </svg>
            <svg className={style.svg}>
              <use href={heartsvg}></use>
            </svg>
            <Button variant="contained" color="default">
              See more
            </Button>
            <svg className={style.svg}>
              <use href={deletesvg}></use>
            </svg>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.position}>
            <h2 className={style.city}>{city}</h2>
            <h2 className={style.country}>{country}</h2>
          </div>
          <p className={style.time}>{time}</p>
          <Button variant="contained" color="default">
            Hourly forecast
          </Button>

          <div className={style.dateContainer}>
            <p className={style.date}>{date}</p>
            <div className={style.divider}></div>
            <p className={style.weekday}>{weekday}</p>
          </div>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather Icon"
              className={style.img}
            />
          )}

          <h2 className={style.temperature}>
            {data && data.main ? `${Math.round(data.main.temp)}°C` : ''}
          </h2>

          <div className={style.vidgets}>
            <svg className={style.svg}>
              <use href={refrehsvg}></use>
            </svg>
            <svg className={style.svg}>
              <use href={heartsvg}></use>
            </svg>
            <Button variant="contained" color="default">
              See more
            </Button>
            <svg className={style.svg}>
              <use href={deletesvg}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
