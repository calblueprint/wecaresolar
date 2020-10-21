import * as React from "react";
import { render } from "react-dom";
import "./components/articleCard/articleStyle.scss";

const articles = [
    {
        title: "Article Title #1",
        description: "Description #1"
    },
    {
        title: "Article Title #2",
        description: "Description #2",
    },
    {
        title: "Article Title #3",
        description: "Description #3"
    }
];

const App = () => {
  return (
    <>
      <div className="container">
        {articles.map((src) => (
          <div className="card">
            <p className="title">{src.title}</p>
            <p className="description">{src.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default App;