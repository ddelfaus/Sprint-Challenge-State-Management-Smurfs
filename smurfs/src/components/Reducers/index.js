

const initialState = {
    servers: [],
    isFetching: false, 
    error: ''
}




const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
      
        default :
            return state;
    }
}

export default reducer;