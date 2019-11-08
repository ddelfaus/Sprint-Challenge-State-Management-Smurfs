import React from 'react';
import { useEffect } from 'react'
import { connect} from 'react-redux'

import Smurf from './Smurf'
import { fetchSmurfs } from './Actions'




const Smurflist = (props) => {
 
    useEffect(() => {
        props.fetchSmurfs();
      }, []);
    
      if (props.isFetching) {
        
        return <h2>Loading Cat Facts...</h2>;
      }
    
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(item => (
        <Smurf  key ={item.id} smurf ={item} />
      ))} 
        </div>
    )
}

const mapStateToProps = state => {
    return {

        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, {fetchSmurfs})(Smurflist);