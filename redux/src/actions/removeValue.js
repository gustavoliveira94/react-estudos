import { CLICK_REMOVE_VALUE } from './actionTypes';

export function removeValue(id){
    return {
        type: CLICK_REMOVE_VALUE,
        id
    }
}