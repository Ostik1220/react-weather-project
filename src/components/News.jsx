import { useEffect, useState, useRef } from 'react';
import style from '../css/news.module.css';
import Button from '@mui/material/Button';

const News = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?q=pets&key=50843029-710c41440238bfac4a870a64c&image_type=photo&orientation=horizontal&per_page=4&page=${page}`
        );

        if (!res.ok) {
          console.error('error');
          return;
        }

        const json = await res.json();
        setList(prev => {
          const newItems = json.hits.filter(
            item => !prev.some(prevItem => prevItem.id === item.id)
          );
          return [...prev, ...newItems];
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchNews();
  }, [page]);

  function addPage() {
    setPage(prev => prev + 1);
  }

  return (
    <div className={style.news}>
      <div className={`container ${style.newsContainer}`}>
        <h2 className={style.title}>Interacting with our pets</h2>
        <ul className={style.list}>
          {list.map(article => (
            <li className={style.item} key={article.id}>
              <img
                src={article.webformatURL}
                alt={article.tags}
                className={style.img}
              />
              <p className={style.text}>
                This is photo of {article.tags} by {article.user}
              </p>
            </li>
          ))}
        </ul>

        <Button variant="contained" color="default" onClick={addPage}>
          See more
        </Button>
      </div>
    </div>
  );
};

export default News;
