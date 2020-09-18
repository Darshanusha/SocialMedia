export default (state = {}, action) => {
    if (action.type === 'POSTS') {
        return action.payload;
    }
    if (action.type === 'ADD_POST') {
        return {...state,[action.payload.id]: action.payload};
    }
    if(action.type === "POST"){
        return action.payload;
    }
    return state;
}