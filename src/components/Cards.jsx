import { useState, useEffect, useContext, memo } from 'react';
import { CardsContext } from '../cardsContent';
import { Button } from '@mui/material';
import { useDateByTimezone } from '../hooks';
import refrehsvg from '../img/refresh.svg';
import hearthsvg from '../img/heart.svg';
import hearthsvgActive from '../img/heartActive.svg';
import deletesvg from '../img/delete.svg';
import style from '../css/cards.module.css';
import { toast } from 'react-toastify';

const CardItem = memo(({ card }) => {
  const [isCardFavourited, setIsCardFavourited] = useState(false);
  const favourites = JSON.parse(localStorage.favourite || '[]');
  const { deleteCard, setSignal, favouriteCard } = useContext(CardsContext);
  const [render, setRender] = useState(1);
  const notifyDelete = () => toast.error('Card was deleted.');
  const notifyReload = () => toast('Card was reloaded.');
  const notifyFavourite = () => toast('Card was added to favourite.');
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

  const deleteFromFavourite = city => {
    const newFavourite = favourites.filter(card => card.city !== city);
    console.log(newFavourite);
    localStorage.setItem('favourite', JSON.stringify(newFavourite));
  };

  const hearthsvgcurrent = !isCardFavourited ? hearthsvg : hearthsvgActive;
  if (card.context !== null) {
    if (localStorage.logged === 'true') {
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
                notifyReload();
              }}
            />
            <img
              src={hearthsvgcurrent}
              alt=""
              className={style.svg}
              key="heart"
              onClick={() => {
                notifyFavourite();
                favouriteCard(city);
                setIsCardFavourited(true);
              }}
            />
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
                notifyDelete();
                deleteFromFavourite(city);
              }}
            />
          </div>
        </div>
      );
    } else {
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
                notifyDelete();
                deleteFromFavourite(city);
              }}
            />
          </div>
        </div>
      );
    }
  } else {
    return null;
  }
});

const Cards = () => {
  const { cards, addCard, signal, setSignal, isLogged } =
    useContext(CardsContext);
  const notifySuccess = () => toast.success('City was founded.');
  const notifyError = () =>
    toast.error(`City wasn't founded, please reload the page.`);

  useEffect(() => {
    if (signal.state !== 'load') return;

    const lastCard = cards[cards.length - 1];
    if (!lastCard) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${lastCard.city}&units=metric&APPID=17901880cf618f6a938a98535f079158`
        );

        const json = await res.json();
        if (res.ok && json.cod === 200) {
          addCard(json);
          setSignal({ state: 'await', cod: 0, city: null });
          notifySuccess();
        } else {
          notifyError();
        }
      } catch (err) {
        console.error(err);
        notifyError();
      }
    };

    fetchWeather();
  }, [signal, cards, addCard, isLogged]);

  useEffect(() => {
    console.log('isLogged changed:', isLogged);
  }, [isLogged]);
  function cardsIfLogged() {
    const favourites = JSON.parse(localStorage.favourite || '[]');

    const favouriteCities = favourites.map(card => card.city);

    const filteredCards = cards.filter(
      card => !favouriteCities.includes(card.city)
    );

    return (
      <>
        {favourites.map((card, index) => (
          <CardItem key={card.city || index} card={card} />
        ))}

        {filteredCards.map((card, index) => (
          <CardItem key={card.city || index} card={card} />
        ))}
      </>
    );
  }

  const cardsByLogged =
    localStorage.logged === 'true'
      ? cardsIfLogged()
      : cards.map((card, index) => <CardItem key={index} card={card} />);

  const cardsVisibility = cards.length > 0 ? style.cards : style.invisible;

  return (
    <div className={cardsVisibility} id="menu">
      <div className={`container ${style.cardsContainer}`}>{cardsByLogged}</div>
    </div>
  );
};

export default Cards;
