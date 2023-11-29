import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM,CLEAR_LIST } from "../actionTypes/actionType";

const initialState = {
    items:[
       
    ],
}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:{
            console.log("Add Item :",action.payload)
            return {
                ...state,
                items:[
                    ...state.items,action.payload
                ]
            }
        }
            
        case TOGGLE_ITEM:{
            return {
                ...state,
                items:state.items.map((element)=>{
                    if(element.id==action.payload){
                        element.packed=!element.packed
                    }
                    return element
                })
            }
        };

        case DELETE_ITEM:{
            return {
                ...state,
                items:state.items.filter((element)=>{
                    return element.id!=action.payload;
                })
            }
        };

        case CLEAR_LIST:{
            const check = window.confirm("Are you sure you want to clear? 😔")
            if (check){
                return {
                    ...state,
                    items:[]
                }
            }
            return {
                ...state
            }
        }
        
        default:
            return state;

    }
}

export default FormReducer;
