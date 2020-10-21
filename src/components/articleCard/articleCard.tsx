import * as React from "react";
import "./articleStyle.scss";

const articles = [
    {
        title: "Article Title Lorem Ipsum Here",
        description: "Lorem Ipsum is not simply text. It has roots in a piece"
    },
    {
        title: "Article Title #1",
        description: "Description #1",
    },
    {
        title: "Article Title #2",
        description: "Description #2"
    }
];

const ArticleCard = () => {
  return (
    <>
      <div className="article-container">
        {articles.map((src) => (
          <div className="article-card">
            <p className="title">{src.title}</p>
            <p className="description">{src.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticleCard;
