import highTemp from '../img/high-temperature.png';
import lowTemp from '../img/low-temperature.png'
import humidity from '../img/humidity.png';
import pressure from '../img/pressure.png';
import wind from '../img/wind.png';
import visibility from '../img/visibility.png';
import style from '../css/detailed-info.module.css';
import { CardsContext } from '../cardsContent';
import { useContext } from 'react';

const DetailedInfo = () => {
  const { signal, cards } = useContext(CardsContext);
  if (signal.cod !== 3) {
    return null;
  } else {
    const neededCard = cards.find(card => card.city === signal.city);
    console.log(neededCard);
const tempIcon = neededCard.context.main.feels_like < 0 ? lowTemp : highTemp;
// console.log(neededCard.context.main.feels_like < 0)
    return (
      <div className="container">
        <ul className={style.list}>
          <li className={style.item}>
            <p className={style.text}>Feels like</p>
            <p className={style.info}>{neededCard.context.main.feels_like}℃</p>
            <img src={tempIcon} alt="" className={style.img} />
          </li>
          <li className={style.item}>
            <p className={style.text}>Min ℃</p>
            <p className={style.info}>{neededCard.context.main.temp_min}℃</p>
            <p className={style.text}>Max ℃</p>
            <p className={style.info}>{neededCard.context.main.temp_max}℃</p>
          </li>
          <li className={style.item}>
            <p className={style.text}>Humidity</p>
            <p className={style.info}>{neededCard.context.main.humidity}</p>
            <img src={humidity} alt="" className={style.img} />
          </li>
          <li className={style.item}>
            <p className={style.text}>Pressure</p>
            <p className={style.info}>{neededCard.context.main.pressure}</p>
            <img src={pressure} alt="" className={style.img} />
          </li>
          <li className={style.item}>
            <p className={style.text}>Wind speed</p>
            <p className={style.info}>{neededCard.context.wind.speed} m/s</p>
            <img src={wind} alt="" className={style.img} />
          </li>
          <li className={style.item}>
            <p className={style.text}>Visibility</p>
            <p className={style.info}>{neededCard.context.visibility}</p>
            <img src={visibility} alt="" className={style.img} />
          </li>
        </ul>
      </div>
    );
  }
};
export default DetailedInfo;
