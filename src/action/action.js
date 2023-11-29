import { ADD_ITEM,DELETE_ITEM,TOGGLE_ITEM,CLEAR_LIST,FORM_SLICE_CHANGE } from "../actionTypes/actionType"

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

const changeformslice=(data)=>{
    return {
        type:FORM_SLICE_CHANGE,
        payload:data
    }
}

export {addItem,deleteItem,togglePacked,clearList,changeformslice}