import { SearchTypes } from "./search.types";

export const addValue = value => ({
    type: SearchTypes.ADD_SELECTED_VALUE,
    payload: value
});

export const removeValue = value => ({
    type: SearchTypes.REMOVE_SELECTED_VALUE,
    payload: value
});

export const handleChange = value => ({
    type: SearchTypes.HANDLE_INPUT_CHANGE,
    payload: value
});