import style from '../css/hero.module.css';
import glass from '../img/search.svg';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className={style.heroBackground}>
      <div className={`container ${style.hero}`}>
        <h1 className={style.title}>Weather dashboard</h1>
        <div className={style.box}>
          <p className={style.text} style={{ textAlign: 'right' }}>
            Create your personal list of
            <br />
             favorite cities and always be
             <br /> aware of
            the weather.
          </p>
          <div className={style.line}></div>
          <p className={style.text} style={{ textAlign: 'left' }}>
            October 2023
            <br />
            Friday, 13th
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
              width: '45px',
              height: '42px',
              minWidth: 0,
              padding: 0,
            }}
          >
            <svg className={style.svg}>
              <use href={glass}></use>
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Hero;
