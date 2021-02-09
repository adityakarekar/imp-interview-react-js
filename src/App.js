import React, {Component,useState} from 'react';
import Person from './Person';
import './Aditya.css';
function App()
{


  const [my_name,ChngMyName]=useState("Aditya")


  const ChangeName=()=>
  {
    ChngMyName("Java");

  }

const myStyle=
{
color:'red',
margin:'10px',
backgroundColor: 'purple'

}

return(
  <div>
     <Person name={my_name}     clickable={ChangeName}>
     </Person>
     <h1 style ={myStyle}>
      Hi welcome to react js
     </h1>
   </div>

);

}



export default App;