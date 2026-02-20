import { useState, useEffect } from 'react';
import { useDateByTimezone } from '../hooks';
import refrehsvg from '../img/refresh.svg';
import hearthsvg from '../img/heart.svg';
import deletesvg from '../img/delete.svg';
import style from '../css/cards.module.css';
import { Button } from '@mui/material';

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Lviv&units=metric&APPID=17901880cf618f6a938a98535f079158'
        );

        if (!res.ok) {
          console.error('errore');
          return;
        }

        const json = await res.json();
        // console.log(json);
        setData(json);
      } catch (err) {
        // console.error(err);
      }
    };

    fetchWeather();
  }, []);

  const city = data && data.name ? data.name : '';

  const timezoneOffset = data && data.timezone ? data.timezone : 0;

  const country = data && data.sys && data.sys.country ? data.sys.country : '';

  const icon =
    data && data.weather && data.weather[0] && data.weather[0].icon
      ? data.weather[0].icon
      : undefined;

  const needDate = useDateByTimezone(timezoneOffset);
  const time = needDate.toLocaleTimeString('ua-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const weekday = needDate.toLocaleString('en-US', { weekday: 'long' });
  const date = needDate
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replaceAll('/', '.');

  return (
    <div className={style.cards} id="menu">
      <div className={`container ${style.cardsContainer}`}>
        <div className={style.card}>
          <div className={style.position}>
            <h2 className={style.city}>{city}</h2>
            <h2 className={style.country}>{country}</h2>
          </div>
          <p className={style.time}>{time}</p>
          <div className={style.buttons}>
            <Button
              variant="contained"
              color="default"
              sx={{
                  padding: '8px 18px',
                  width: '96px',
                  height: '23px',
                  fontSize: "9px",
                  padding: '6px 8px',
                                '@media (min-width:1200px)': {


                                  width: '117px',
                height: '28px',
                fontWeight: '500',
                fontSize: '10px',
                padding: '8px 8px',
                }
              }}
            >
              Hourly forecast
            </Button>

            <Button
              variant="contained"
              color="default"
              sx={{
                  padding: '8px 18px',
                  width: '96px',
                  height: '23px',
                  fontSize: "9px",
                  padding: '6px 8px',
                '@media (min-width:1200px)': {


                                  width: '117px',
                height: '28px',
                fontWeight: '500',
                fontSize: '10px',
                padding: '8px 8px',
                }
              }}
            >
              Weekly forecast
            </Button>
          </div>

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
            <img src={refrehsvg} alt="" className={style.svg}/>
            <img src={hearthsvg} alt="" className={style.svg}/>
            <Button variant="contained" color="default"
            sx={{
'@media (max-width:1200px)': {
  fontSize: "9px",
padding: "6px 13px",
width: "81px",
height:"23px",
margin: ""
                }
            }}>
              See more
            </Button>
            <img src={deletesvg} alt="" className={style.svg}/>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
