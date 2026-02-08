import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis
} from "victory";

import styles from "../css/day-forecast.module.css"

const DayForecast = () => {


const hours = [
  "11am", "12am", "1am", "2am", "3am", "4am",
  "5am", "6am", "7am", "8am", "9am", "10am",
  "11am", "12pm", "1pm", "2pm", "3pm", "4pm",
  "5pm", "6pm"
];

const data = hours.map((_, i) => ({
  x: i,
  y: Math.random() * 20 + 5, 
}));


  return <div className="container">
    <div className={styles.dayForecast}>
      <h2 className={styles.title}>Hourly forecast</h2>
       <VictoryChart
       width={1055}
       height={448}
  theme={VictoryTheme.clean}
  domain={{
    y: [5, 25], 
  }}
>

<VictoryAxis
  orientation="top"
  tickValues={hours.map((_, i) => i)}
  tickFormat={(t) => hours[t]}
  style={{
    axis: { stroke: "transparent" },
    ticks: { stroke: "transparent" },
    tickLabels: { fill: "#6b7280", fontSize: 11 },
    grid: { stroke: "#b5b5b5" },
  }}
/>


  <VictoryAxis
    dependentAxis
    tickValues={[5, 10, 15, 20, 25]}
    tickFormat={(t) => `${t}°`}
    style={{
      axis: { stroke: "transparent" },
      ticks: { stroke: "transparent" },
      tickLabels: { fill: "#6b7280", fontSize: 12 },
      grid: { stroke: "#b5b5b5" },
    }}
  />


  <VictoryLine
    data={data}
    style={{
      data: {
        stroke: "#FFB36C",
        strokeWidth: 2,
      },
    }}
  />
</VictoryChart>

  </div>;
  </div>
};
export default DayForecast;