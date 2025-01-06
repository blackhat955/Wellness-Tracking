// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes,useNavigate,Navigate } from 'react-router-dom';
// import RegistrationPage from './pages/registrationPages/resPage';
// import Findprofessional from './pages/findProfessional';
// import LoginPage from './pages/loginPages/logPage';
// import UserProfile from './pages/useprofile/userprof';
// import Admin from './pages/adminPage/adminPage';
// import ResetPage from './pages/resetPage/reset';
// import OTP from './pages/optpage/otpPage';
// import Forgot from './pages/forgetPassword/forgotPage';
// import WorkoutPlans from './pages/workoutPlans';
// import Navbar from './components/navbar/navbar';
// import NavbarLogResPage from './components/navbarLogResPage/nav';



// const App = () => {
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     const userDetailsData = JSON.parse(localStorage.getItem('userDetails'));
//     if (userDetailsData) {
//       console.log('userDetailsData', userDetailsData);
//       console.log('this is working fine');
//       setUserDetails(userDetailsData);
//     }
//   }, []);


  
//   return (
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/profile/:name" element={<UserProfile  /> } />
//         <Route path="/forget" element={<Forgot />} />
//         <Route path="/reset-password/:token" element={<ResetPage />} exact />
//         <Route path="/otp/:email" element={<OTP />} exact />
//         <Route path="/register" element={<RegistrationPage />} />
//         <Route path="/professional/:name" element={<Findprofessional /> } />
//         <Route path="/workplans/:name" element={<WorkoutPlans />}  />
//         <Route path="/admin/:name" element={<Admin /> } />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/registrationPages/resPage';
import Findprofessional from './pages/findProfessional';
import LoginPage from './pages/loginPages/logPage';
import UserProfile from './pages/useprofile/userprof';
import Admin from './pages/adminPage/adminPage';
import ResetPage from './pages/resetPage/reset';
import OTP from './pages/optpage/otpPage';
import Forgot from './pages/forgetPassword/forgotPage';
import WorkoutPlans from './pages/workoutPlans';
import Navbar from './components/navbar/navbar';

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Add an event listener to handle screen resizing
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    // Render this message if the user is on a mobile or tablet device
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
        <h1>Unsupported Device</h1>
        <p>This application is only supported on desktop browsers. Please access it on a PC.</p>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile/:name" element={<UserProfile />} />
        <Route path="/forget" element={<Forgot />} />
        <Route path="/reset-password/:token" element={<ResetPage />} exact />
        <Route path="/otp/:email" element={<OTP />} exact />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/professional/:name" element={<Findprofessional />} />
        <Route path="/workplans/:name" element={<WorkoutPlans />} />
        <Route path="/admin/:name" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;









