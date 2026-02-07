import highTemp from '../img/high-temperature.png';
import humidity from '../img/humidity.png';
import pressure from '../img/pressure.png';
import wind from '../img/wind.png';
import visibility from '../img/visibility.png';
import style from '../css/detailed-info.module.css';


const DetailedInfo = () => {
  return <div className="container">
    <ul className={style.list}>
      <li className={style.item}>
        <p className={style.text}>Feels like</p>
        <p className={style.info}>lorem</p>
        <img src={highTemp} alt="" className={style.img}/>
      </li>
      <li className={style.item}>
        <p className={style.text}>Min ℃</p>
        <p className={style.info}>lorem</p>
        <p className={style.text}>Max ℃</p>
        <p className={style.info}>lorem</p>
      </li>
      <li className={style.item}>
        <p className={style.text}>Humidity</p>
        <p className={style.info}>lorem</p>
        <img src={humidity} alt="" className={style.img}/>
      </li>
      <li className={style.item}>
        <p className={style.text}>Pressure</p>
        <p className={style.info}>lorem</p>
        <img src={pressure} alt="" className={style.img}/>
      </li>
      <li className={style.item}>
        <p className={style.text}>Wind speed</p>
        <p className={style.info}>lorem</p>
        <img src={wind} alt="" className={style.img}/>
      </li>
      <li className={style.item}>
        <p className={style.text}>Visibility</p>
        <p className={style.info}>lorem</p>
        <img src={visibility} alt="" className={style.img}/>
      </li>
    </ul>
  </div>;
};
export default DetailedInfo;