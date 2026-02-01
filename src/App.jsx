import Header from "components/Header";
import Hero from "components/Hero";
import Modal from "components/Modal";
import Cards from "components/Cards";
import DetailedInfo from "components/DetailedInfo";
import WeekForecast from "components/WeekForecast";
import DayForecast from "components/DayForecast";
import News from "components/News";
import Nature from "components/Nature";
import Footer from "components/Footer";


export const App = () => {
  return (
    <div className="container">
      <h1>Welcome to the App!</h1>
      <Header />
      <Hero />
      <Modal />
      <Cards />
      <DetailedInfo />
      <WeekForecast />
      <DayForecast />
      <News />
      <Nature />
      <Footer />
    </div>
  );
};
