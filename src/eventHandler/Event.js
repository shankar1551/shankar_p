import React from 'react';
import {Outlet} from 'react-router-dom';

function App(props) {
  

const HandleClick = (e,)=>
{
  alert('click occur'+e);
  console.log(e);
}
const CustomHandler= (msg)=>
{
  const {msgg,e} = msg;
  console.log(msg,e);
}



  return (
    <div className="App">
      <button onClick={(event)=> CustomHandler({msg:'hii',e:event})}>Click me to see the magic</button>
      <Outlet/>  
    </div>
  );
}

export default App;
