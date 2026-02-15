import { useEffect, useState } from "react";
import style from '../css/nature.module.css'
const Nature = () => {

  const [list, setLIst] = useState([])
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
          setLIst(json.hits)
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchNews();
    }, []);
  
  return       <div className={style.news}>
      <div className={`container ${style.natureContainer}`}>
    <ul className={style.slider}>
                {list.map(article => (
                  <li className={style.item} key={article.id}>
                    <img src={article.webformatURL} alt={article.tags} className={style.img} />
                  </li>
                ))}
    </ul>
  </div>
  </div>;
};
export default Nature;