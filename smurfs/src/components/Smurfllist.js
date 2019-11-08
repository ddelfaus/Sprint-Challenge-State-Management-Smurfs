import React from 'react';
import { useEffect } from 'react'
import { connect} from 'react-redux'



const Smurflist = (props) => {




return (
    <div>



    </div>
)

}

const mapStateToProps = state => {
    return {

        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, {})(Smurflist);