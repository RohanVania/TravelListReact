import { ADD_ITEM,DELETE_ITEM,TOGGLE_ITEM,CLEAR_LIST } from "../actionTypes/actionType"

const addItem=(data)=>{
    return {
        type:ADD_ITEM,
        payload:data
    };
}

const deleteItem=(id)=>{
    return {
        type:DELETE_ITEM,
        payload:id
    };
}

const togglePacked=(id)=>{
    return {
        type:TOGGLE_ITEM,
        payload:id
    }
}

const clearList=()=>{
    return {
        type:CLEAR_LIST
    }
}

export {addItem,deleteItem,togglePacked,clearList}