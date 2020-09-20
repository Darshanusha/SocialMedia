import _ from 'lodash';
export default (state = null,action)=>{
    if(action.type === "COMMENTS"){
        return action.payload;
    }
    if(action.type === "ADD_COMMENT"){
        return {...state, [action.payload.id]: action.payload};
    }
    if(action.type === "DELETE_COMMENT"){
        return _.omit(state, action.payload.id);
    }
    return state;
}