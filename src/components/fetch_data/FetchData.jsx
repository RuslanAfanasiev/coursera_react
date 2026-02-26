import React from "react";
import fruitData from "./Fruit.json";
import "./FetchData.css";

const FetchData = () => {
  const data = fruitData;

  return (
    <>
      <h1 className="useFetch_heading">Use Fetch Custom Hook</h1>
      <ul className="list_data_main">
        {data &&
          data.map((e, index) => (
            <li key={index} className="list_data">
              <h3>{e.name}</h3>
              <img src={e.image} alt={e.name} width="200" />
              <p>
                <strong>Importance: </strong>
                {e.importance}
              </p>
              <p>
                <strong>Benefits: </strong>
                {e.benefits}
              </p>
              <p>
                <strong>Time to eat: </strong>
                {e.best_time_to_intake}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FetchData;
