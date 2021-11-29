import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalSingle = () => {
  let { animal } = useParams();
  let history = useHistory();
  document.querySelector("#mw-content-text > div.mw-parser-output > p:nth-child(7)")

  return (
    <div className="container">
      <h1>This is the page for {animal}</h1>
        <div className="animal">
        <img className="card-img" src={`https://source.unsplash.com/1600x900/?${animal}`} />
        <button className="button" onClick={() => history.goBack()}>Back to animals</button>
        </div>
    </div>
  );
};

export default AnimalSingle;
