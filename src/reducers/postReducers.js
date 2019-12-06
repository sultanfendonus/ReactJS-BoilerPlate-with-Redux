const INITIAL_STATE = {
    postList: null
}

export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'ALL_POST': 
        return {...state, postList: action.payload};

        default: 
        return state;
    }

}