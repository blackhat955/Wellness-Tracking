import Navbar from '../../components/navbar/navbar'; 
import ClassesGraph from '../../components/classgraph/classgraph';
import DoughNut from '../../components/donut/donut';
import LineBar from '../../components/Linebar/linebar';
import Chat from '../../components/chatbot/chat';
import session from '../../pages/session';
import './userprof.css';

function userProfile() {
  session();
  return (
    <div >
      {/* <Navbar />   */}
      <div className='user'>
      <div className="grid">
        <ClassesGraph className="classes-graph" />
        <DoughNut className="doughnut" />
        <LineBar className="line-bar" />
        <Chat />
        </div>
      </div>
    </div>
  );
}

export default userProfile;
