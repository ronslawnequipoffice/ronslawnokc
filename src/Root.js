import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Root() {

  return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="./Home">Ron's Lawn Equipment</Navbar.Brand>
              <Nav className="me-auto">
                <NavLink to="Home" className="nav-link">Home</NavLink>
                <NavLink to="Services" className="nav-link">Services</NavLink>
                <NavLink to="Sales" className="nav-link">Sales</NavLink>
                <NavLink to="Contact" className="nav-link">Contact</NavLink>
              </Nav>
            </Container>
          </Navbar>        
          <Outlet/>
        </div>
        )
}