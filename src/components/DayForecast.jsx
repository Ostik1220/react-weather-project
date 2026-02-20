import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis
} from "victory";
import styles from "../css/day-forecast.module.css"
import { useMediaQuery } from "hooks";

const DayForecast = () => {

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1199px)");

let hours = ["11am", "12am", "1am"];
let height = 300;
let width = 243;
if (isDesktop){
  hours = [
  "11am", "12am", "1am", "2am", "3am", "4am",
  "5am", "6am", "7am", "8am", "9am", "10am",
  "11am", "12pm", "1pm", "2pm", "3pm", "4pm",
  "5pm", "6pm"]
  height = 448
  width = 1055;
} else if(isTablet) {
  hours = [
  "11am", "12am", "1am", "2am", "3am", "4am",
  "5am", "6am"]
  height = 311
  width = 544;
}

const data = hours.map((_, i) => ({
  x: i,
  y: Math.random() * 20 + 5, 
}));


  return <div className="container">
    <div className={styles.dayForecast}>
      <h2 className={styles.title}>Hourly forecast</h2>
       <VictoryChart
         padding={{ top: 20, bottom: 40, left: 50, right: 20 }}
       width={width}
       height={height}
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
    axis: { stroke: "none" },
    ticks: { stroke: "none" },
    tickLabels: { fill: "#6b7280", fontSize: 11 },
    grid: { stroke: "#b5b5b5" },
  }}
/>


  <VictoryAxis
    dependentAxis
    tickValues={[5, 10, 15, 20, 25]}
    tickFormat={(t) => `${t}°`}
    style={{
      axis: { stroke: "none" },
      ticks: { stroke: "none" },
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

  </div>
  </div>
};
export default DayForecast;