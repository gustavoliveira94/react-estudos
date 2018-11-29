import {CLICK_UPDATE_VALUE} from '../actions/actionTypes'
import {CLICK_REMOVE_VALUE} from '../actions/actionTypes'

function clickReducer(state = [], action){
    switch(action.type) {
        case CLICK_UPDATE_VALUE:
            return [ ...state,{
                id: Math.random(),
                text: action.text
            }]
            
        case CLICK_REMOVE_VALUE:
            return state.filter(({id}) => id !== action.id)
        
        default: 
            return state;

    }
}

export default clickReducer