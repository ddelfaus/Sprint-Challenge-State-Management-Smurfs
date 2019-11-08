import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from './Actions'

const SmurfForm = (props) => {


    const [newSmurf, setNewSmurf] = useState({
       
        name: "",
        age:"",
        height: ""


    })


   const handleChanges = event =>{
    setNewSmurf({
        ...newSmurf,
        [event.target.name]: event.target.value
    })

   }

   const addNewSmurf = event => {
       event.preventDefault()
       const smurf= newSmurf
       props.addSmurf(smurf)
       setNewSmurf ({
           name: "",
           age: "",
           height: ""
       })
       
   }


return (

    <div>
        <form onSubmit = {addNewSmurf} >
            <input 
            type = "text"
            name = "name"
            value ={newSmurf.name}
            onChange={handleChanges}
            placeholder = "Enter Name"
            required
            />
            <input 
            type = "number"
            name = "age"
            value ={newSmurf.age}
            onChange={handleChanges}
            placeholder = "Enter Age"
            required
            />
            <input 
            type = "number"
            name = "height"
            value ={newSmurf.height}
            onChange={handleChanges}
            placeholder = "Enter Height"
            required
            />

            <button type="submit">Add New Smurf!</button>
        </form>
    </div>
)

}

const mapStateToProps = state => {
    return{
        smurfs:state.smurfs
    }
}

export default connect( mapStateToProps,{addSmurf})(SmurfForm)

