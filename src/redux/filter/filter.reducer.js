const { FilterTypes } = require("./filter.types")

const initialState = {
    open: false
}

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case FilterTypes.FILTER_OPEN: 
            return {
                ...state,
                open: true
            }
        case FilterTypes.FILTER_CLOSE:
            return {
                ...state,
                open: false
            }
        default:
            return state
    }
}

export default filterReducer;