import { useState, useEffect, useContext, memo } from 'react';
import { CardsContext } from '../cardsContent';
import { Button } from '@mui/material';
import { useDateByTimezone } from '../hooks';
import refrehsvg from '../img/refresh.svg';
import hearthsvg from '../img/heart.svg';
import deletesvg from '../img/delete.svg';
import style from '../css/cards.module.css';

const CardItem = memo(({ card }) => {
  const { deleteCard, setSignal } = useContext(CardsContext);
  const [render, setRender] = useState(1);

  const timezoneOffset = card.context?.timezone ?? 0;
  const needDate = useDateByTimezone(timezoneOffset);

  const city = card.city;
  const country = card.context?.sys?.country;
  const icon = card.context?.weather?.[0]?.icon;
  const temp = card.context?.main?.temp;

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
            fontSize: '9px',
            padding: '6px 8px',
            '@media (min-width:1200px)': {
              width: '117px',
              height: '28px',
              fontWeight: '500',
              fontSize: '10px',
              padding: '8px 8px',
            },
          }}
          onClick={() => {
            setSignal({ state: 'await', cod: 1, city: city });
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
            fontSize: '9px',
            padding: '6px 8px',
            '@media (min-width:1200px)': {
              width: '117px',
              height: '28px',
              fontWeight: '500',
              fontSize: '10px',
              padding: '8px 8px',
            },
          }}
          onClick={() => {
            setSignal({ state: 'await', cod: 2, city: city });
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
        {temp ? `${Math.round(temp)}°C` : 'Loading...'}
      </h2>

      <div className={style.vidgets}>
        <img
          src={refrehsvg}
          alt=""
          className={style.svg}
          onClick={() => {
            setRender(render + 1);
            setSignal({ state: 'await', cod: 0, city: null });
          }}
        />
        <img src={hearthsvg} alt="" className={style.svg} />
        <Button
          variant="contained"
          color="default"
          sx={{
            '@media (max-width:1200px)': {
              fontSize: '9px',
              padding: '6px 13px',
              width: '81px',
              height: '23px',
              margin: '',
            },
          }}
          onClick={() => {
            setSignal({ state: 'await', cod: 3, city: city });
          }}
        >
          See more
        </Button>
        <img
          src={deletesvg}
          alt=""
          className={style.svg}
          onClick={() => {
            deleteCard(city);
            setSignal({ state: 'await', cod: 0, city: null });
          }}
        />
      </div>
    </div>
  );
});

const Cards = () => {
  const { cards, addCard, signal, setSignal } = useContext(CardsContext);

  useEffect(() => {
    if (signal.state !== 'load') return;

    const lastCard = cards[cards.length - 1];
    if (!lastCard) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${lastCard.city}&units=metric&APPID=17901880cf618f6a938a98535f079158`
        );

        if (!res.ok) return;

        const json = await res.json();
        addCard(json);
        setSignal({ state: 'await', cod: 0, city: null });
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, [signal, cards, addCard]);
const cardsVisibility = cards.length > 0 ? style.cards : style.invisible;
  return (
    <div className={cardsVisibility} id="menu">
      <div className={`container ${style.cardsContainer}`}>
        {cards.map((card, index) => (
          <CardItem key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
