import { useState } from "react";
import refrehsvg from "../img/refresh.svg";
import heartsvg from "../img/heart.svg";
import deletesvg from "../img/delete.svg";

const Cards = () => {
  const [icon, setIcon] = useState("");
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Rzeszow&units=metric&APPID=17901880cf618f6a938a98535f079158").then(response => response.json()).then(data => {
    setIcon(data.weather[0].icon);}).catch(err => console.error(err));
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


    return (<div className="container">Cards Component
      <p>cards api: https://api.openweathermap.org/data/2.5/weather?q=Rzeszow&units=metric&APPID=17901880cf618f6a938a98535f079158</p>
      <svg>
        <use href={refrehsvg}></use>
      </svg>
      <img src={iconUrl} alt="Weather Icon" />
  </div>)
};
export default Cards;