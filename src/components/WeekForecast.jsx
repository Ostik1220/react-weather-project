import style from '../css/week-forecast.module.css'
import { useEffect, useState, useContext } from 'react';
import { CardsContext } from '../cardsContent';


const WeekForecast = () => {
      const {signal} = useContext(CardsContext)
      const [data, setData] = useState(null)
useEffect(() => {
  if (!signal?.city) return; 
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${signal.city}&units=metric&APPID=17901880cf618f6a938a98535f079158`
      );
      if (!res.ok) return;
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
  };

  fetchWeather();
}, [signal?.city]);

  let daily = []


if (data?.list) {
   daily = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  )

}


const elements = daily.map(day => {
  const icon = day.weather[0].icon
  const weather = day.weather[0].main
  const date = new Date(day.dt_txt);

const formatted = date.toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});
  const temp = day.main.temp + '°C'
  return (
    <li key={day.dt} className={style.item}>
      <p className={style.text}>{formatted}</p>

      <div className={style.info}>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={weather}
          className={style.img}
        />
        <p className={style.text}>{temp}</p>
      </div>

      <p className={style.text}>{weather}</p>
    </li>
  )
})





if (signal.cod !== 2) {
  return null
} else {
  return <div className={style.weekForecast}>
  <div className={`container ${style.weekForecastContainer}`}>
    <h2 className={style.title}>5-day forecast</h2>
    <ul className={style.list}>
      {elements}
    </ul>
    </div>
  </div>;
}
};
export default WeekForecast;