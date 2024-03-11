import "./css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export function MainCarousel() {
  return (
    <div className="carouselDiv">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/shopImages/frontSideOfShop.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>{/* <h3></h3> */}</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/shopImages/frontEndCap.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>{/* <h3></h3> */}</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/shopImages/echoWeedeaterShelf.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>{/* <h3></h3> */}</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/shopImages/echoChainsawArea.jpg")}
            alt="Fourth slide"
          />
          <Carousel.Caption>{/* <h3></h3> */}</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/shopImages/enginesAndOilArea.jpg")}
            alt="Fifth slide"
          />
          <Carousel.Caption>{/* <h3></h3> */}</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Outlet />
    </div>
  );
}
