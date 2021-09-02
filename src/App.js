import React, { Fragment, useEffect, useState } from "react";
import GetImagesContent from "./GetContent/Images";
import GetButtonsContent from "./GetContent/Buttons";

const App = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState(0);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=" + limit +"&page=2&category_ids=" + category;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data));
    const apiUrl2 = "https://api.thecatapi.com/v1/categories";
    fetch(apiUrl2)
      .then(response => response.json())
      .then(data => setCategories(data));
  }, [limit, category]);

  const changeCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    setLimit(10);
  }

  const changeLimit = () => {
    let value = limit + 10;
    setLimit(value)
  }

  return (
    <Fragment>
      <div className="flexMenu">
        <GetButtonsContent category={category} categories={categories} changeCategory={changeCategory} />
      </div>
      <div className="flexContent">
        <div class="flexTitle">
          Responsive Design
        </div>
        <div className="flexTable">
          <GetImagesContent data={data} />
        </div>
        <div className="loadMore">
          {data.length !== 0 && <button onClick={changeLimit}>Load More</button>}
        </div>
      </div>
    </Fragment>
  );
}

export default App;