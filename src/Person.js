import { useState } from "react";


function Person(props)
{



return(
     <div>
         <h1 className="wisdom">
             This is in H1 and my name is: {props.name}
         </h1>
         <button onClick={props.clickable}> Click Here</button>
     </div>

    );

}
export default Person;