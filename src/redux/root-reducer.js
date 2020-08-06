import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';
import filterReducer from './filter/filter.reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    search: searchReducer,
    filter: filterReducer,
    form: formReducer
});
