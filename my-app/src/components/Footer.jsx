import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function BrandExample() {
  return (
    <>
      <Navbar fixed="bottom" bg="light">
        <Container>
          <Navbar.Brand href="#home">Footer</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
