import style from '../css/hero.module.css';
import glassDesktop from '../img/search-desktop.svg';
import glassLaptop from '../img/search-laptop.svg'
import glassPhone from '../img/search-phone.svg'
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';



const Hero = () => {
  const day = new Date().getDate();
  const month = new Date().toLocaleString('en-US', { month: 'long' });
  const year = new Date().getFullYear();
  const weekday = new Date().toLocaleString('en-US', { weekday: 'long' });


const isDesktop = useMediaQuery('(min-width:1200px)');
const isLaptop = useMediaQuery('(min-width:768px)');

let width = 16;
let height = 15;

if (isDesktop) {
  width = 45;
  height = 42;
} else if (isLaptop) {
  width = 28;
  height = 27;
}


let search;

if (isDesktop) {
  search = glassDesktop;
} else if (isLaptop) {
  search = glassLaptop;
} else {
  search = glassPhone;
}

  return (
    <div className={style.heroBackground}>
      <div className={`container ${style.hero}`}>
        <h1 className={style.title}>Weather dashboard</h1>
        <div className={style.box}>
          <p className={style.text} style={{ textAlign: 'right' }}>
            Create your personal list of
            <br />
            favorite cities and always be
            <br /> aware of the weather.
          </p>
          <div className={style.line}></div>
          <p className={style.text} style={{ textAlign: 'left' }}>
            {month} {year}
            <br />
            {weekday}, {day}th
          </p>
        </div>
        <form action="" className={style.form}>
          <input
            type="text"
            className={style.input}
            placeholder="Search location..."
          />
          <Button
            type="submit"
            className={style.button}
            variant="contained"
            color="default"
            sx={{
  borderLeft: '2px solid #000',
  borderRadius: '0 10px 10px 0',
  minWidth: 0,
  padding: 0,
width: {width},
  height: {height},
}}

          >
            <svg className={style.svg}>
              <use href={search}></use>
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Hero;
