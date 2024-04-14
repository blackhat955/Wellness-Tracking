import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbarLogResPage/nav';
import OTP from '../../components/otp/otp';

import Footer from '../../components/footer/footer';

function ResetPage() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <div className='log'>
      <OTP/>
      </div>
     
     <Footer/>
    </div>
  );
}

export default ResetPage;