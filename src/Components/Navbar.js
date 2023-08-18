import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{width:"160px", fontSize:"20px"}} href="#home"><b>Triple Top Pattern</b></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Our Services</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        </Container>
        <form class="form-inline">
        <span style={{display:"flex",}} >
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button style={{marginLeft:"10px", marginRight:"10px",}} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </span>
  </form>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;