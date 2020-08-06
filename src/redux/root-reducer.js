import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';
import filterReducer from './filter/filter.reducer';

export default combineReducers({
    search: searchReducer,
    filter: filterReducer
});
