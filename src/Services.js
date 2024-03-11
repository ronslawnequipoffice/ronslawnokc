import "./css/services.css";

export default function Services() {
  return (
    <div className="serviceCards">
      <div className="serviceCard">
        <div className="cardTitle">
          <span>Riding/Z-Turn/Stand-On Mowers</span>
        </div>
        <div className="cardPicture">
          <img src={require("./images/servicesImages/rider.png")}/>
        </div>
        <div className="cardDescription">
          <div className="serviceInfo">
            Full Service
            <span className="item">Clean or Replace Carburetor</span>
            <span className="item">Clean or Replace Air Filter</span>
            <span className="item">Clean or Replace Belt(s)</span>
            <span className="item">Clean or Replace Spark Plug(s)</span>
            <span className="item">Change Oil and Oil Filter</span>
            <span className="item">Change or Sharpen Blades</span>
          </div>
          <div className="serviceInfo">
            Engine Tune-Up
            <span className="item">Clean or Replace Carburetor</span>
            <span className="item">Clean or Replace Air Filter</span>
            <span className="item">Clean or Replace Spark Plug(s)</span>
            <span className="item">Change Oil and Oil Filter</span>
          </div>
          <div className="serviceInfo">
            Quick Service
            <span className="item">Change Oil and Oil Filter</span>
            <span className="item">Change or Sharpen Blades</span>
          </div>
          <div className="serviceInfo">
            Deck Work Only
            <span className="item">Change Spindles</span>
            <span className="item">Change Pulleys</span>
            <span className="item">Change or Sharpen Blades</span>
            <span className="item">Change or Anti-Scalp Wheels</span>
          </div>
          <div className="serviceInfo">
            Other Symptoms Can Be Fixed at Request
          </div>
        </div>
      </div>

      <div className="serviceCard">
        <div className="cardTitle">
          <span>Push/Self-Propelled Mowers</span>
        </div>
        <div className="cardPicture">
          <img src={require("./images/servicesImages/pushmower.png")}/>
        </div>
        <div className="cardDescription">
          <div className="serviceInfo">
            Full Service
            <span className="item">Clean or Replace Carburetor</span>
            <span className="item">Clean or Replace Air Filter</span>
            <span className="item">Clean or Replace Belt(s)</span>
            <span className="item">Clean or Replace Spark Plug(s)</span>
            <span className="item">Change Oil and Oil Filter</span>
            <span className="item">Change or Sharpen Blades</span>
          </div>
          <div className="serviceInfo">
            Quick Service
            <span className="item">Change Oil and Oil Filter</span>
            <span className="item">Change or Sharpen Blades</span>
          </div>
          <div className="serviceInfo">
            Other Symptoms Can Be Fixed at Request
          </div>
        </div>
      </div>

      <div className="serviceCard">
        <div className="cardTitle">
        <span>Generators/Augers</span>
        </div>
        <div className="cardPicture">
          <img src={require("./images/servicesImages/generator.png")}/>
        </div>
        <div className="cardDescription">
          <div className="serviceInfo">
            Full Service
            <span className="item">Clean or Replace Carburetor</span>
            <span className="item">Clean or Replace Air Filter</span>
            <span className="item">Clean or Replace Spark Plug(s)</span>
            <span className="item">Change Oil and Oil Filter</span>
            <span className="item">Change or Sharpen Blades</span>
          </div>
          <div className="serviceInfo">
            Other Symptoms Can Be Fixed at Request
          </div>
        </div>
      </div>

      <div className="serviceCard">
        <div className="cardTitle">
        <span>Heaters</span>
        </div>
        <div className="cardPicture">
          <img src={require("./images/servicesImages/heater.png")}/>
        </div>
        <div className="cardDescription">
          <div className="serviceInfo">
            Full Service
            <span className="item">Clean or Replace Rotator Fan</span>
            <span className="item">Clean or Replace Nozzle</span>
            <span className="item">Replace all Hose(s), If needed</span>
            <span className="item">Replace Filter Kit, If needed</span>
          </div>
          <div className="serviceInfo">
            Other Symptoms Can Be Fixed at Request
          </div>
        </div>
      </div>

      <div className="serviceCard">
        <div className="cardTitle">
        <span>Hand Held 2-Cycle Equipment</span>
        </div>
        <div className="cardPicture">
          <img src={require("./images/servicesImages/trimmer.png")}/>
        </div>
        <div className="cardDescription">
          <div className="serviceInfo">
            Full Service
            <span className="item">Clean or Replace Carburetor</span>
            <span className="item">Clean or Replace Air Filter</span>
            <span className="item">Clean or Replace Spark Plug(s)</span>
            <span className="item">Change or Sharpen Blades</span>
          </div>
          <div className="serviceInfo">
            Other Symptoms Can Be Fixed at Request
          </div>
        </div>
      </div>
    </div>
  );
}
