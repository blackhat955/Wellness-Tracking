import Navbar from '../components/navbar/navbar'; 
import Search from '../components/searchnav/searchnav';
import UserContainer from '../components/cardPopulate/populate';




function workoutPlans() {
  return (
    <div>
    <Navbar />  
    <Search className="go"/>
    <div style={{margin:"30px", textAlign:"center"}}>
      <h1>Find a Professional</h1>
    </div>
    <UserContainer />

    </div>
  );
}

export default workoutPlans;
