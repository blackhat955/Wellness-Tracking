import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbarLogResPage/nav';
import Reset from '../../components/resetpassword/reset'
import Footer from '../../components/footer/footer';

function ResetPage() {

  return (
    <div className="App">
      <Navbar/>
      <div className='log'>
      <Reset/>
      </div>
     
     <Footer/>
    </div>
  );
}

export default ResetPage;