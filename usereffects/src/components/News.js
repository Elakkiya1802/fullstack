import React, { useState } from "react";
import NewsItem from "./NewsItem";
const News = ({ category }) => {
  //Create a state to store the news articles
  const [articles, setArticles] = useState([]);

  //UseEffect runs when the category changes
  React.useEffect(() => {
    //Fetch news articles based on the selected category
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3b3f30d036db49d9b469045f85c8f235`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <p>{category}News</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
        }}
      >
        
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;