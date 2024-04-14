import Navbar from '../../components/navbar/navbar'; 
import Admin from '../../components/adminElement/admin'
import session from '../../pages/session';


function adminPage() {
  session();
  return (
    <div >
      {/* <Navbar />  */}
      <Admin/> 
    </div>
  );
}

export default adminPage;