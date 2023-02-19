import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { React, useState } from "react";
import BrandExample from "./components/Footer";
import CardCittà from "./components/CardCittàStatic";
import { Row } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState({});

  const [city, setCity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchCity = (e) => {
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
        <Header />
        <input
          //onkeypress funziona che si attiva quando l'utente passa il valore
          onKeyPress={searchCity}
          value={city}
          //gli passo a funzione onchange con parametnro evento per cercare la città
          onChange={(e) => setCity(e.target.value)}
          placeholder="inserisci la citta da cercare"
          type="text"
        />

        <div className="top">
          <div className="location ">
            <h1>{data.name}</h1>
          </div>
          <div className="temp">
            {data.main ? (
              <h3> gradi percepiti: {data.main.feels_like}</h3>
            ) : null}
          </div>
          <div className="description">
            {data.main ? <p> Tasso di umidità {data.main.humidity} %</p> : null}
          </div>
          <div className="description">
            {data.main ? <p> Tasso di umidità {data.clouds.all} %</p> : null}
          </div>
        </div>

        <Row className=" d-flex justify-content-space-between textm">
          <CardCittà />
          <CardCittà />
          <CardCittà />
        </Row>
        <BrandExample />
      </div>
    </>
  );
}

export default App;
