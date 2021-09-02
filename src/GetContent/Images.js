import React from "react";

const GetButtonsContent = ({data}) => {
  return (
    data.map((item) => {
      return (
        <div key={item.id} className="flexTr">
          <img src={item.url} />
        </div>
      );
    })
  );
}

export default GetButtonsContent;