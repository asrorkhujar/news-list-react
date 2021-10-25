import Form from "./form";
import Item from "./item";
import { useState } from "react";

function App() {
  const [news, setNews] = useState([
    {
      name: "Aplle maxsuloti",
      desc: "iPhone 13 Pro Max haqida ma'lumotlar",
      tags: "#tech"
    }
  ]);

  return (
    <>
      <main>
        <div className="container mt-5">
          <h1>News</h1>
          <Form news={news} setNews={setNews}></Form>
          <ul className="list-unstyled">
            {news.map((newss) => <Item {...newss} />)}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
