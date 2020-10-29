export default function reserve(state = [], action){
    //console.log('chegou')
    switch(action.type){
        case 'ADD_RESERVE':
            return [ ...state, action.trip];
        default:
            return state;
    }
}