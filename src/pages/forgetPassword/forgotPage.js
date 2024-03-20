import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbarLogResPage/nav';
import Forgot from '../../components/forget/forgot';
import Footer from '../../components/footer/footer';

function ForgotPassword() {

  return (
    <div className="App">
      <Navbar/>
      <div className='log'>
      <Forgot/>
      </div>
     <Footer/>
    </div>
  );
}

export default ForgotPassword;