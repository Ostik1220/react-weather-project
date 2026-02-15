import Header from 'components/Header';
import Hero from 'components/Hero';
import Modal from 'components/Modal';
import Cards from 'components/Cards';
import DetailedInfo from 'components/DetailedInfo';
import WeekForecast from 'components/WeekForecast';
import DayForecast from 'components/DayForecast';
import News from 'components/News';
import Nature from 'components/Nature';
import Footer from 'components/Footer';
import { CircularProgress } from 'react-loader-spinner';

export const App = () => {
  return (
    <div>
      {/* <CircularProgress
height="100"
width="100"
color="#FFB36C"
ariaLabel="circular-progress-loading"
wrapperStyle={{}}
wrapperClass="wrapper-class"
visible={true}
strokeWidth={2}
animationDuration={1}
/> */}
      <Header />
      <Hero />
      <Modal />
      <Cards />
      <DetailedInfo />
      <DayForecast />
      <WeekForecast />
      <News />
      <Nature />
      <Footer />
    </div>
  );
};
