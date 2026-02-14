const News = () => {
  useEffect(() => {
      const fetchNews = async () => {
        try {
          const res = await fetch(
            'https://newsapi.org/v2/everything?q=pets&from=2026-01-02&sortBy=publishedAt&apiKey=c84034d791c44ae78c99f5457ea64f3f'
          );
  
          if (!res.ok) {
            console.error('errore');
            return;
          }
  
          const json = await res.json();
          console.log(json);
          setData(json);
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchNews();
    }, []);
  

  return <div className="container">
    <h2>Interacting with our pets</h2>
    <ul>
      <li>
        <img src="" alt="" />
        <p></p>
      </li>
      <li>
        <img src="" alt="" />
        <p></p>
      </li>
      <li>
        <img src="" alt="" />
        <p></p>
      </li>
      <li>
        <img src="" alt="" />
        <p></p>
      </li>
    </ul>
  </div>;
};
export default News;