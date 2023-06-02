import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Home() {

  return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Ron's Lawn Equipment</Navbar.Brand>
              <Nav className="me-auto">
                <Link to={`/`}>Home</Link>
                <Link to={`Pricing`}>Pricing</Link>
                <Link to={`Contact`}>Contact</Link>
              </Nav>
            </Container>
          </Navbar>        
          <Carousel>
            <Carousel.Item>              
              <img
                className="d-block w-100"
                src={require("./image1.png")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./image2.png")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./image3.png")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        )
}