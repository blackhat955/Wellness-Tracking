// import './App.css';
import Navbar from '../components/navbar/navbar'; 
import Search from '../components/searchnav/searchnav';
import UserContainer from '../components/cardPopulate/populate';
import session from './session';
import Chat from '../components/chatbot/chat';




function findprofessional() {
  session();
  return (
    <div>
      {/* <Navbar />   */}
      <Search className="go"/>
      <div style={{margin:"30px", textAlign:"center"}}>
        <h1>Find a Professional</h1>
      </div>
      <UserContainer />
      <Chat />
    </div>
  );
}

export default findprofessional;
