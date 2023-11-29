import { FORM_SLICE_CHANGE } from "../actionTypes/actionType"

const initialState = { description: '', quantity: Number(1), packed: false }

const FormSliceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_SLICE_CHANGE: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }

}

export default FormSliceReducer;