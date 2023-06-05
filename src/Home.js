import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

export default function Root() {

  return (
        <div>
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
          <Outlet/>
        </div>
        )
}