 const session = ()=>{
    const user=localStorage.getItem('userDetails');
    if(!user){
      window.location.href="/";
    }
}

export default session;