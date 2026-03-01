import { useEffect, useState } from 'react';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Cards from 'components/Cards';
import DetailedInfo from 'components/DetailedInfo';
import WeekForecast from 'components/WeekForecast';
import DayForecast from 'components/DayForecast';
import News from 'components/News';
import Nature from 'components/Nature';
import Footer from 'components/Footer';
import BasicSpeedDial from 'components/BasicSpeedDial';
import { CircularProgress } from 'react-loader-spinner';
import { CardsProvider } from 'cardsContent';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress
          height="100"
          width="100"
          color="#FFB36C"
          ariaLabel="circular-progress-loading"
          visible={true}
          strokeWidth={2}
          animationDuration={1}
        />
      </div>
    );
  }

  return (
    <div className="bg">
      <CardsProvider>
        <Header id='header'/>
        <Hero />
        <Cards />
        <DetailedInfo />
        <DayForecast />
        <WeekForecast />
        <News />
        <Nature />
        <Footer id='footer'/>
        <BasicSpeedDial />
      </CardsProvider>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};
