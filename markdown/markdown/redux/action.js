import { TEXT_TYPE, TOGGLE_TYPE } from '../constant';
export function textAction(data){
    return {
        type:TEXT_TYPE,
        data
    }
}
export function toggleAction(item){
    return {
        type:TOGGLE_TYPE,
        item
    }
}