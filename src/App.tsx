import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="nck-home">
      {/* --Header start-- */}
      <div className="Nav-header d-flex align-items-center justify-content-center w-100 px-4 px-lg-5 py-4">
        <div className="links d-flex justify-content-end align-items-end w-100  mw-992 mt-2">
          <div className="d-flex pb-small">
            <a className="me-5 text-decoration-none text-gray fw-600 ls" href="#">TRIPS</a>
            <a className="me-5 text-decoration-none text-gray fw-600 ls" href="#">RECENTLY VIEWED</a>
            <a className="me-5 text-decoration-none text-gray fw-600 ls" href="#">BOOKINGS</a>
          </div>
          <div className="avatar mx-3">
            <img src="/images/avatar-alt.png" alt="avatar-min" width={42} height={42} />
          </div>
        </div>
      </div>
      {/* --Header end-- */}
      <div className="nck-body d-flex flex-column align-items-center justify-content-center w-100 px-4 px-lg-5 py-4">
        <div className="d-flex flex-column justify-content-center align-items-center w-100 mw-992 mt-3">
          <hr className="align-self-start mb-4" />
          <div className="w-100 d-flex flex-column pe-4">
            <div className="d-flex flex-column flex-sm-row w-100 justify-content-between">
              <div>
                <p className="fw-500 align-self-start text-dark mb-0 ls">Payment Information</p>
                <small className="align-self-start text-lighter ls">Choose your method of payment</small>
              </div>
              <div className="pe-4 d-flex align-items-center my-2 my-sm-0">
                <div className="d-flex align-items-center justify-content-center me-5">
                  <img className="me-2" src="/images/visa.png" alt="visa" width={25} />
                  <img className="ms-1" src="/images/discover.png" alt="discover" width={22} />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="circle me-2" />
                  <img src="/images/paypal.png" alt="paypal" width={58} />
                </div>
              </div>
            </div>
            <div className="mt-3 d-flex flex-column flex-md-row w-100">
              <div className="col-12 col-md-6 pe-3">
                <div className="credit mb-5 mb-md-0 px-2 pt-4 pb-3 rounded-3 d-flex flex-column text-light overflow-hidden">
                  <p className="ms-3 fs-smaller mb-2">CARD NUMBER</p>
                  <p className="ms-3 fs mb-1">4324 5433 9382 1030</p>
                  <div className="d-flex align-items-center mb-2">
                    <img src="/images/signal.png" alt="signal" height={17} width={15} />
                    <img src="/images/circuit.png" alt="circuit" width={50}  />
                  </div>
                  <p className="ms-3 mb-2 fs-smaller">EXPIRATION DATE</p>
                  <p className="ms-3 fs mb-2">03/24</p>
                  <div className="fs-small text-light d-flex ms-3 me-4 align-items-center justify-content-between">
                    <p className="mb-0">John Doe</p>
                    <img src="/images/mastercard.svg" alt="mastercard" width={67} className="align-self-start" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex flex-wrap details w-100">
                  <div className="col-6">
                    <label htmlFor="credit" className="form-group fs-small col-11">
                      Credit card number
                      <input className="form-control mt-2 mb-3 w-100 fs-small bg-gray " type="number" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength={19} id="credit" />
                    </label>
                  </div>
                  <div className="col-6">
                    <label htmlFor="expiry" className="form-group col-11 fs-small">
                      Expiration date
                      <input className="form-control mt-2 mb-3 w-100 fs-small bg-gray " type="date" id="expiry" />
                    </label>
                  </div>
                  <div className="col-6">
                    <label htmlFor="security" className="form-group fs-small col-11">
                      Security code
                      <input className="form-control ls mt-2 mb-3 w-100 fs-small bg-gray " type="number" maxLength={5} id="security" />
                    </label>
                  </div>
                  <div className="col-6">
                    <label htmlFor="postal" className="form-group fs-small col-11">
                      Postal Code
                      <input className="form-control mt-2 mb-3 w-100 fs-small bg-gray " type="number" id="postal" />
                    </label>
                  </div>
                  <label htmlFor="save-card" className="w-100 form-check fs-small">
                    <input type="radio" className=" fs-small me-3 form-check-input" />
                    Use this card for next time purchase
                  </label>
                  <button type="button" className="button btn-primary w-100 me-4 d-flex align-items-center justify-content-center border-0">
                    Add card
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="align-self-start mb-4" />
          <div className="d-flex flex-column w-100 pe-5 fw-500 fs-mid mb-2">
            <div className="d-flex justify-content-between w-100">
              <p>Subtotal</p>
              <p>&#8358;2,497.00</p>
            </div>
            <div className="d-flex justify-content-between w-100">
              <p>Estimated TAX</p>
              <p>&#8358;119.64</p>
            </div>
            <div className="d-flex justify-content-between w-100">
              <p>Promotional Code: <span className="text-lighter">Z4KXLM9A</span></p>
              <p>&#8358;-60.00</p>
            </div>
            <hr className="align-self-start mb-4 w-100" />
            <div className="pay d-flex flex-column flex-md-row justify-content-between">
              <button type="submit" className="order-2 order-md-1 mb-5 align-self-start button btn-primary fs-6 ls fw-500 complete d-flex align-items-center justify-content-center border-0">
                Complete payment
              </button>
              <span className="order-1 order-md-2 fw-900 fs-5 text-gray">
                Total: &#8358;2556.64
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
