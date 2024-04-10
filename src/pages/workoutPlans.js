import Navbar from '../components/navbar/navbar'; 
import Search from '../components/searchnav/searchnav';
import WorkOut from '../components/workoutcard/workcard';




function workoutPlans() {
  return (
    <div>
    <Navbar />  
    <Search className="go"/>
    <div style={{margin:"30px", textAlign:"center"}}>
      <h1>Find workout Contents</h1>
    </div>
    <WorkOut />

    </div>
  );
}

export default workoutPlans;
