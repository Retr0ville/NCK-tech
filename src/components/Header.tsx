import React from 'react';

function Header() {
  return (<div className="Nav-header d-flex align-items-center justify-content-center w-100 px-4 px-lg-5 py-4">
    <div className="links d-flex justify-content-end align-items-end w-100  mw-992 mt-2">
      <div className="d-flex pb-small">
        <a className="me-5 text-decoration-none text-gray fw-600 ls" href="#">TRIPS</a>
        <a className="me-5 text-decoration-none text-gray fw-600 ls" href="#">RECENTLY VIEWED</a>
        <a className="me-5 text-decoration-none text-gray fw-600 ls" href="#">BOOKINGS</a>
      </div>
      <div className="avatar mx-3">
        <img className="avatar-img" src="/images/avatar-alt.png" alt="avatar-min" width={42} height={42} />
      </div>
    </div>
  </div>);
}

export default Header