import { useEffect, useState } from 'react';
import style from '../css/news.module.css';
import Button from '@mui/material/Button';

const News = () => {
const [list, setList] = useState([]);
const [page, setPage] = useState(4);

useEffect(() => {
  const fetchNews = async () => {
    try {
      const res = await fetch(
        `https://pixabay.com/api/?q=$pets&page=$1&key=50843029-710c41440238bfac4a870a64c&image_type=photo&orientation=horizontal&per_page=${page}&page=1`
      );

      if (!res.ok) {
        console.error('error');
        return;
      }

      const json = await res.json();
      console.log(json)
      const data = json.hits
      setList(data.map(article => (
  <li className={style.item} >
    <img src={article.webformatURL} alt={article.title} className={style.img} />
    <p className={style.text}>This is photo about {article.tags} by {article.user}</p>
  </li>
)));

    } catch (err) {
      console.error(err);
    }
  };

  fetchNews();
}, []);

  return (
    <div className={style.news}>
      <div className={`container ${style.newsContainer}`}>
        <h2 className={style.title}>Interacting with our pets</h2>
        <ul className={style.list}>
          {list}
        </ul>
        <Button variant="contained" color="default"   onClick={() => setPage(prev => prev + 4)}>
          See more
        </Button>
      </div>
    </div>
  );
};
export default News;
