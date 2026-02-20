import { useEffect, useState, useContext } from 'react';
import highTemp from '../img/high-temperature.png';
import lowTemp from '../img/low-temperature.png'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory';
import { CardsContext } from '../cardsContent';
import styles from '../css/day-forecast.module.css';
import { useMediaQuery } from 'hooks';

const DayForecast = () => {
  const { signal, cards } = useContext(CardsContext);

  const [chartData, setChartData] = useState([]);
  const [hoursLabels, setHoursLabels] = useState([]);
  const [isReverse, setIsReverse] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1199px)');

  let width = 243;
  let height = 300;

  if (isDesktop) {
    width = 1055;
    height = 448;
  } else if (isTablet) {
    width = 544;
    height = 311;
  }

useEffect(() => {
  if (!signal?.city) return;
  const fetchData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${signal.city}&units=metric&APPID=17901880cf618f6a938a98535f079158`
    );
    const forecast = await res.json();
    const next24h = forecast.list.slice(0, 8);
    const hasNegative = next24h.some(item => item.main.temp < 0);
    setIsReverse(hasNegative); 
    const data = next24h.map(item => ({
      y: Math.abs(Math.round(item.main.temp)),
    }));
    setChartData(data);
    const labels = next24h.map(item => {
      const date = new Date(item.dt * 1000);
      let hour = date.getHours();
      if (hour === 0) return "12am";
      if (hour < 12) return `${hour}am`;
      if (hour === 12) return "12pm";
      return `${hour - 12}pm`;
    });
    setHoursLabels(labels);
  };

  fetchData();
}, [signal.city]); 

const tempIcon = isReverse ? lowTemp : highTemp;
const title = isReverse ?" Hourly forecast (neg temp)" : "Hourly forecast "
  if (signal.cod !== 1) {
    return null;
  } else {
    return (
      <div className="container">
        <div className={styles.dayForecast}>
          <h2 className={styles.title}>{title} <img src={tempIcon} alt="" className={styles.tempImg} /></h2>

          <VictoryChart
            padding={{ top: 20, bottom: 40, left: 50, right: 20 }}
            width={width}
            height={height}
            theme={VictoryTheme.clean}
            domain={{ y: [0, 20] }}
          >
            <VictoryAxis
              orientation="top"
              tickValues={chartData.map((_, i) => i)}
              tickFormat={(_, i) => hoursLabels[i]}
              style={{
                axis: { stroke: 'none' },
                ticks: { stroke: 'none' },
                tickLabels: { fill: '#6b7280', fontSize: 11 },
                grid: { stroke: '#b5b5b5' },
              }}
            />

            <VictoryAxis
              dependentAxis
              tickValues={[0, 5, 10, 15, 20]}
              tickFormat={t => `${t}°`}
              style={{
                axis: { stroke: 'none' },
                ticks: { stroke: 'none' },
                tickLabels: { fill: '#6b7280', fontSize: 12 },
                grid: { stroke: '#b5b5b5' },
              }}
            />

            <VictoryLine
              data={chartData}
              style={{
                data: { stroke: '#FFB36C', strokeWidth: 2 },
              }}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
};

export default DayForecast;
