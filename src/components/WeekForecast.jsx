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
        setData(json);
        console.log(json);;
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  let daily = []

    useEffect(() => {
      console.log('data changed for week:', data);
    }, [data]);

if (data?.list) {
   daily = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  )

  console.log(daily)
}

const elements = daily.map(day => {
  const icon = day.weather[0].icon
  const weather = day.weather[0].main
  // const date = day.dt_txt.slice(2, 10).replace("-", ":").replace("-", ":")
  const date = new Date(day.dt);

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




  return <div className={style.weekForecast}>
  <div className={`container ${style.weekForecastContainer}`}>
    <h2 className={style.title}>5-day forecast</h2>
    <ul className={style.list}>
      {elements}
    </ul>
    </div>
  </div>;
  
};
export default WeekForecast;