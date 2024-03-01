import React, { useState, useEffect } from 'react';
import Spinner from '../../components/spinner/spinner';
import Register from '../../components/RegistrationPage/register';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './resPage.css';

function RegisterPages() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <div className='res'>
          <Register />
          </div>
         <div className='foo'>
         <Footer />
         </div>
         
        </>
      )}
    </div>
  );
}

export default RegisterPages;
