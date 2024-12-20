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
      <label className="hoursLabel">Winter Hours</label>
      <span className="hoursLine">
        We will be closing 12/18/24 and will reopen 01/06/25
      </span>
      <span className="hoursLine">
        Monday - Thursday : 8:00 am - 5:00 pm
      </span>
      <span className="hoursLine">Friday : Closed</span>
      <span className="hoursLine">Saturday : Closed</span>
      <span className="hoursLine">Sunday : Closed</span>
    </div>
  );
}

export function Address() {
  return (
    <div className="addressInfo">
      <label className="addressLabel">Address</label>
      <span className="addressLine">5700 S Western Ave</span>
      <span className="addressLine">Oklahoma City, OK 73109</span>
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
      <span>(Please note that a 3.5% surcharge will apply when using a card for payment.</span>
      <span>This surcharge will be reflected on the card receipt and added to the total bill.)</span>
    </div>  
  );
}