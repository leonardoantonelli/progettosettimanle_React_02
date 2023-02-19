import Card from "react-bootstrap/Card";

const CardCittà = () => {
  const urlRoma = `https://api.openweathermap.org/data/2.5/weather?q=Roma&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
  console.log(urlRoma);

  const fetchRoma = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Roma&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
          console.log(response);
        } else {
          alert("qualcosa non va");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Il meteo di Roma:
          </Card.Subtitle>
          <Card.Text>icona</Card.Text>
          <Card.Link href="#">Clicca per scoprire i dettagli</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCittà;
