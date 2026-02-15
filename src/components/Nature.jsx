import { useEffect, useState } from 'react';
import style from '../css/nature.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Nature = () => {
  const [list, setLIst] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?q=nature&key=50843029-710c41440238bfac4a870a64c&image_type=photo&orientation=horizontal&per_page=5&page=1`
        );

        if (!res.ok) {
          console.error('error');
          return;
        }

        const json = await res.json();
        setLIst(json.hits);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className={style.news}>
      <div className={`container ${style.natureContainer}`}>
        <h2 className={style.title}>Beautiful nature</h2>

        <Swiper
          spaceBetween={0}
          initialSlide={2}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {list.map(article => (
            <SwiperSlide key={article.id} className="slide">
              <img
                src={article.webformatURL}
                alt={article.tags}
                className={style.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Nature;
