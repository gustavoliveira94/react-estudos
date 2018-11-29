import { CLICK_UPDATE_VALUE } from "./actionTypes";

export function clickButton(text){
    return {
        type: CLICK_UPDATE_VALUE,
        text
    }
}