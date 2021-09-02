import React from "react";

const GetButtonsContent = ({ category, categories, changeCategory }) => {
  return (
    categories.map((item) => {
      console.log("category", category)
      console.log("item.id", item.id)
      return (
        <div key={item.id} className="flexButtonsTr">
          <button className={category == item.id ? "active" : ""} value={item.id} onClick={changeCategory}>
            <span className="textMenu">
              {item.name}
            </span>
            <span className="iconMenu">
              1
            </span>
          </button>
        </div>
      );
    })
  );
}

export default GetButtonsContent;