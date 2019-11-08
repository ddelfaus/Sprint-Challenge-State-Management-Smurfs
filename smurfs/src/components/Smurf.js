import React from 'react';
import { useState} from 'react';




const Smurf = props => {
    console.log(props, "smurf comp.")

    const [editSmurf, setEditSmurf] = useState({
        name: props.smurf.name,
        age:  props.smurf.age,
        height: props.smurf.height,
        editing : false
    })
 
    
    const handleChanges = event =>{
        setEditSmurf({
            ...editSmurf,
            [event.target.name]: event.target.value
        })
    
       }



    return (
  
  




  <div>
      {/* {!editSmurf.editing ?} */}

        <h2>{props.smurf.name}</h2>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
            <button >edit</button>
            <button>delete</button>


  </div>

  )
};

export default Smurf;
