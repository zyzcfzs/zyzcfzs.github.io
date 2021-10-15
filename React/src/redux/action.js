export function textAction(data){
    return {
        type:"TEXT",
        data
    }
}
export function toggleAction(item){
    return {
        type:"TOGGLE",
        item
    }
}