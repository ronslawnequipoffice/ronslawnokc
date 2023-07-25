import './css/services.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Services() {
    return (
      <div className="servicesCards">
        
        <Card style={{ width: '20rem' }}>
          <Card.Title><span>Riding/Z-Turn/Stand-On Mowers</span></Card.Title>
          <Card.Img variant="top" src={require("./images/image2.png")} />
          <Card.Body>
            <Card.Text>
              <div className='serviceInfo'>Full Service
                <span className='item'>Clean or Replace Carburetor</span>
                <span className='item'>Clean or Replace Air Filter</span>
                <span className='item'>Clean or Replace Belt(s)</span>
                <span className='item'>Clean or Replace Spark Plug(s)</span>
                <span className='item'>Change Oil and Oil Filter</span>
                <span className='item'>Change or Sharpen Blades</span>
              </div>
              <div className='serviceInfo'>Engine Tune-Up
                <span className='item'>Clean or Replace Carburetor</span>
                <span className='item'>Clean or Replace Air Filter</span>
                <span className='item'>Clean or Replace Spark Plug(s)</span>
                <span className='item'>Change Oil and Oil Filter</span>
              </div>
              <div className='serviceInfo'>Quick Service
                <span className='item'>Change Oil and Oil Filter</span>
                <span className='item'>Change or Sharpen Blades</span>
              </div>
              <div className='serviceInfo'>Deck Work Only
                <span className='item'>Change Spindles</span>
                <span className='item'>Change Pulleys</span>
                <span className='item'>Change or Sharpen Blades</span>
                <span className='item'>Change or Anti-Scalp Wheels</span>
              </div>
              <div className='serviceInfo'>Other Symptoms Can Be Fixed at Request</div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Title><span>Push/Self-Propelled Mowers</span></Card.Title>
          <Card.Img variant="top" src={require("./images/image2.png")} />
          <Card.Body>
            <Card.Text>
            <div className='serviceInfo'>Full Service
                <span className='item'>Clean or Replace Carburetor</span>
                <span className='item'>Clean or Replace Air Filter</span>
                <span className='item'>Clean or Replace Belt(s)</span>
                <span className='item'>Clean or Replace Spark Plug(s)</span>
                <span className='item'>Change Oil and Oil Filter</span>
                <span className='item'>Change or Sharpen Blades</span>
              </div>
              <div className='serviceInfo'>Quick Service
                <span className='item'>Change Oil and Oil Filter</span>
                <span className='item'>Change or Sharpen Blades</span>
              </div>
              <div className='serviceInfo'>Other Symptoms Can Be Fixed at Request</div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Title><span>Generators/Augers</span></Card.Title>
          <Card.Img variant="top" src={require("./images/image2.png")} />
          <Card.Body>
            <Card.Text>
            <div className='serviceInfo'>Full Service
                <span className='item'>Clean or Replace Carburetor</span>
                <span className='item'>Clean or Replace Air Filter</span>
                <span className='item'>Clean or Replace Belt(s)</span>
                <span className='item'>Clean or Replace Spark Plug(s)</span>
                <span className='item'>Change Oil and Oil Filter</span>
                <span className='item'>Change or Sharpen Blades</span>
              </div>
              <div className='serviceInfo'>Other Symptoms Can Be Fixed at Request</div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
          <Card.Title><span>Heaters</span></Card.Title>
          <Card.Img variant="top" src={require("./images/image2.png")} />
          <Card.Body>
            <Card.Text>
              <div className='serviceInfo'>Full Service
                <span className='item'>Clean or Replace Carburetor</span>
                <span className='item'>Clean or Replace Air Filter</span>
                <span className='item'>Clean or Replace Belt(s)</span>
                <span className='item'>Clean or Replace Spark Plug(s)</span>
                <span className='item'>Change Oil and Oil Filter</span>
                <span className='item'>Change or Sharpen Blades</span>
              </div>
              <div className='serviceInfo'>Other Symptoms Can Be Fixed at Request</div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem' }}>
        <Card.Title><span>Hand Held 2-Cycle Equipment</span></Card.Title>
          <Card.Img variant="top" src={require("./images/image2.png")} />
          <Card.Body>
            <Card.Text>
              <div className='serviceInfo'>Full Service
                <span className='item'>Clean or Replace Carburetor</span>
                <span className='item'>Clean or Replace Air Filter</span>
                <span className='item'>Clean or Replace Spark Plug(s)</span>
                <span className='item'>Change or Sharpen Blades</span>
              </div>
              <div className='serviceInfo'>Other Symptoms Can Be Fixed at Request</div>
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
    );
  }