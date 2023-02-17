import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { React, useState } from "react";

const searchCity = (e) => {
  const [data, setData] = useState({});

  const [city, setCity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  //devo premere invio per vedere l'oogetto creato api
  if (e.key === `Enter`) {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setCity("");
  }
};
return (
  <>
    <div className="container">
      <h1> hello</h1>
      <input
        onKeyPress={searchCity}
        value={city}
        //gli passo a funzione onchange con parametnro evento per cercare la città
        onChange={(e) => setCity(e.target.value)}
        placeholder="inserisci la citta da cercare"
        type="text"
      />
      <div className="top">
        <div className="location">
          <h1>{data.name}</h1>
        </div>
        <div className="temp"></div>
        {data.main ? <h3> {data.main.temp} gradi</h3> : null}

        <div className="description"></div>
        {data.main ? <h3> {data.clouds.all} %</h3> : null}
      </div>
    </div>
  </>
);

export default searchCity;
