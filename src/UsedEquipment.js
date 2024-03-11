import "./css/sales.css";
import Carousel from 'react-bootstrap/Carousel';

export default function UsedEquipment() {  
  return (
      <div className="serviceCards">
        <div className="serviceCard">
          <div className="cardTitle">
            <span>1100 Gallon Tank</span>
          </div>
          <div className="cardPicture">
            <Carousel >
              <Carousel.Item>              
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/BlueTank/BlueTank1.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/BlueTank/BlueTank2.jpg")}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/BlueTank/BlueTank3.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/BlueTank/BlueTank4.jpg")}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cardDescription">
            <div className="serviceInfo">
              Details
              <span className="item">$400</span>
              <span className="item">No Fittings on it</span>
              <span className="item">Tank needs to be clean out</span>
            </div>
          </div>
        </div>
  
        <div className="serviceCard">
          <div className="cardTitle">
            <span>200 Gallon Tank with Engine</span>
          </div>
          <div className="cardPicture">
          <Carousel >
              <Carousel.Item>              
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/SprayRig/SprayRig1.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/SprayRig/SprayRig2.jpg")}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/SprayRig/SprayRig3.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/SprayRig/SprayRig4.jpg")}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cardDescription">
            <div className="serviceInfo">
              Details
              <span className="item">$1000</span>
              <span className="item">Engine is questionable</span>
              <span className="item">Pump is questionable</span>
              <span className="item">Some fittings are missing</span>
              <span className="item">Tank needs to be clean out</span>
            </div>
          </div>
        </div>
  
        <div className="serviceCard">
          <div className="cardTitle">
          <span>300 Gallon Tank</span>
          </div>
          <div className="cardPicture">
          <Carousel >
              <Carousel.Item>              
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/Tank/Tank1.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/Tank/Tank2.jpg")}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/Tank/Tank3.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/Tank/Tank4.jpg")}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/Tank/Tank5.jpg")}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cardDescription">
            <div className="serviceInfo">
              Details
              <span className="item">$300</span>
              <span className="item">Some fittings are missing</span>
              <span className="item">Tank needs to be clean out</span>
            </div>
          </div>
        </div>
  
        <div className="serviceCard">
          <div className="cardTitle">
          <span>1100 Gallon Tank with Hose Reel</span>
          </div>
          <div className="cardPicture">
          <Carousel >
              <Carousel.Item>              
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/TankAndReel/TankAndReel1.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/TankAndReel/TankAndReel2.jpg")}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/TankAndReel/TankAndReel3.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/TankAndReel/TankAndReel4.jpg")}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cardDescription">
            <div className="serviceInfo">
              Details
              <span className="item">$800</span>
              <span className="item">Some fittings are missing</span>
              <span className="item">Tank needs to be clean out</span>
            </div>
          </div>
        </div>

        <div className="serviceCard">
          <div className="cardTitle">
          <span>Toro Grandstand - 36 Inch</span>
          </div>
          <div className="cardPicture">
          <Carousel >
              <Carousel.Item>              
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/Grandstand/GrandStand1.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/Grandstand/GrandStand2.jpg")}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./images/sellImages/Grandstand/GrandStand3.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="cardDescription">
            <div className="serviceInfo">
              Details
              <span className="item">Promo Price: $9,699.00</span>
              <span className="item">Our Price: $8,400.00</span>
              <span className="item">36 Inch Cut</span>
              <span className="item">15hp Kawasaki</span>
              <span className="item">Slightly Used</span>
            </div>
          </div>
        </div>
      </div>
    );
}
function createCarousel(images){
  return(
          <Carousel >
            <Carousel.Item>              
              <img
                className="d-block w-100"
                src={require(images)}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3></h3> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          )
}