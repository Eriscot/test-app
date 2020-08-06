import { SearchTypes } from './search.types';
import { nanoid } from 'nanoid';

const initialState = {
    selectedValues: [],
    value: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SearchTypes.ADD_SELECTED_VALUE:
            const value = {
                id: nanoid(),
                text: state.value
            }
            return {
                ...state,
                selectedValues: [...state.selectedValues, value],
                value: ''
            }
        case SearchTypes.REMOVE_SELECTED_VALUE:
            return {
                ...state,
                selectedValues: state.selectedValues.filter(value => value.id !== action.payload.id)
            }
        case SearchTypes.HANDLE_INPUT_CHANGE: 
            return {
                ...state,
                value: action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;