// import Form from "./form";
// import Item from "./item";
import { useEffect, useState } from "react";
import News from "./components/form-news/form-news";
import AddNews from "./components/news/add-news";
import { trackPromise } from "react-promise-tracker";


function App() {

  // const TOP_HEADLINES_URL = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=bfc1f9b2dc384d1081e6f5a137b7288f";
  // const NEWS_SEARCH_URL = 'https://newsapi.org/v2/everything?apiKey=bfc1f9b2dc384d1081e6f5a137b7288f';

  const [news, setNews] = useState([]);

  useEffect(() => {
    trackPromise(
      fetch("https://newsapi.org/v2/top-headlines?country=ru&apiKey=bfc1f9b2dc384d1081e6f5a137b7288f")
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          setNews(data.articles);
        }
      })
    )
  }, []);


  return (
    <>
      <main>
        <div className="container mt-5">
          <h1>News</h1>
          <AddNews news={news} setNews={setNews}></AddNews>
          <ul className="list-unstyled">
            {news.map((newss) => <News {...newss} news={news} setNews={setNews} />)}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
