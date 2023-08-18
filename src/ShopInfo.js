import "./css/contact.css";

export function PhoneNumber() {
  return (
    <div className="phoneInfo">
      <label className="phoneLabel">Phone Number</label>
      <span className="phoneLine"><a href="tel:405-631-3801">(405)631-3801</a></span>
    </div>
  );
}

export function Hours() {
  return (
    <div className="hoursInfo">
      <label className="hoursLabel">Hours</label>
      <span className="hoursLine">
        Monday - Friday : 8:00 am - 5:00 pm{" "}
      </span>
      <span className="hoursLine">Saturday : 8:00 am - 12:00 pm</span>
      <span className="hoursLine">Sunday : Closed</span>
      <span className="hoursLine">
        Labor Day Weekend(Sep. 2nd - 4th) : Closed
      </span>
    </div>
  );
}

export function Address() {
  return (
    <div className="addressInfo">
      <label className="addressLabel">Address</label>
      <span className="addressLine">5700 S Western Ave</span>
      <span>Oklahoma City, OK 73109</span>
      <a href="https://www.google.com/maps?daddr=5700+S+Western+Oklahoma+City+OK+73109+US" target="_blank">Get Directions</a>
    </div>  
  );
}

export function FormsOfPayments() {
  return (
    <div className="paymentsInfo">
      <label className="paymentLabel">Forms of Payments</label>
      <span>Cash</span>
      <span>Checks</span>
      <span>Cashier's Check</span>
      <span>Debit/Credit Card</span>
      <span>(When using a card there will be an extra 3.5% added onto the total.</span>
      <span>This will be reflected on the card receipt.)</span>
    </div>  
  );
}