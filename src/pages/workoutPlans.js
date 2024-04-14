import Navbar from '../components/navbar/navbar'; 
import Search from '../components/searchnav/searchnav';
import session from './session';
import VideoGallery from '../components/workplasvideosCard/videoComponent';



function workoutPlans() {
    session();
  return (
    <div>
    {/* <Navbar />   */}
    <Search className="go"/>
    <div style={{margin:"30px", textAlign:"center"}}>
      <h1>Find workout Contents</h1>
    </div>
    <VideoGallery />

    </div>
  );
}

export default workoutPlans;
