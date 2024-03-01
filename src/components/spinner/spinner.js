// MainComponent.jsx

import React, { useState } from 'react';
import './spinner.css';

const Spinner = () => {

  return (
    <div class="spinner-container">
  <div class="spinner"></div>
    </div>
  );
};

export default Spinner;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loading from './Loading';

// const MainComponent = () => {
//   const [loading, setLoading] = useState(true);

//   // Simulate loading delay
//   setTimeout(() => {
//     setLoading(false);
//   }, 2000);

//   return (
//     <Router>
//       {loading ? (
//         <Loading />
//       ) : (
//         <Switch>
//           {/* Your routes go here */}
//           <Route path="/home" component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       )}
//     </Router>
//   );
// };

// export default MainComponent;
