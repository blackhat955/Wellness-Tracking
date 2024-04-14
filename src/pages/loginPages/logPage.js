import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbarLogResPage/nav';
import Login from '../../components/login/login'
import Footer from '../../components/footer/footer';

function LoginPage() {

  return (
    <div className="App">
      {/* <Navbar/> */}
      <div className='log'>
      <Login/>
      </div>
     
     <Footer/>
    </div>
  );
}

export default LoginPage;