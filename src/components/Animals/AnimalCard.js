import React from "react";
import { Link, useRouteMatch, useHistory} from "react-router-dom";

const AnimalsCard = (props) => {
  const match = useRouteMatch();
  const history = useHistory();
  

  return (
    <div className="card" onClick={() => history.push(`${match.url}/${props.name}`)}>
      <img className="card-img" src={`https://source.unsplash.com/1600x900/?${props.name}`} />
      <h2>{props.name}</h2>
      <Link to={`${match.url}/${props.name}`}>Read more</Link>
    </div>
  );
};

export default AnimalsCard;