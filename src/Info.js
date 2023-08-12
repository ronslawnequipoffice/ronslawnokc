import Accordion from 'react-bootstrap/Accordion';
import "./css/info.css";

export default function Info() {
  return(
    <div className='info-content'>
      <span className='intro-para'>
      Virtually all equipment is assigned both a model/serial number for the frame and another for the engine. 
      It is very important to ensure the accuracy of the model number during parts searches. 
      Once the model and serial numbers are located, we recommend taking a picture using your phone
      so that you will always have it. Below we have listed some spots to help you look while searching for these numbers. 
      Please keep in mind that all equipment is different, and your equipment may not have the model and serial in these locations.
      </span>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Steering wheel riding lawnmowers</Accordion.Header>
              <Accordion.Body>
                <span>Lift the seat and search underneath it.</span>
                <span>Left the hood and check underneath the hood.</span>
                <div className='pictures'>
                    <img
                    className="picture"
                    src={require("./images/riderModelSpots.png")}
                    alt="First slide"
                    />      
                    <img
                    className="picture"
                    src={require("./images/riderModelSpots.png")}
                    alt="First slide"
                    />      
                    <img
                    className="picture"
                    src={require("./images/riderModelSpots.png")}
                    alt="First slide"
                    />      
                </div>  
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Z-turn riding lawnmowers</Accordion.Header>
              <Accordion.Body>
                <span>Lift the seat and search underneath it.</span>
                <span>Left the hood and check underneath the hood.</span>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Walk Behind mowers</Accordion.Header>
              <Accordion.Body>
                <span>Between the two back wheels</span>
                <span>Behind one of the wheels</span>
                <span>Lift the flap of where the bag goes and search underneath</span>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Hand-Held Equipment</Accordion.Header>
              <Accordion.Body>
                <span>Usually it is marked near the engine</span>
                <span>Underneath is sometimes a sticker with model and serial.</span>
                <span>Check the shaft on equipment that has a shaft.</span>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Engines (Be careful it might be hot if recently used)</Accordion.Header>
              <Accordion.Body>
                <span>Sticker on the side of the engine (Newer ones might even have a QR code for you to scan)</span>
                <span>Check around the value cover. (Might need a towel to rub dirt away)</span>
                <span>Next to the muffler. Might need to move a piece of plastic.</span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
    </div>
    )
}
