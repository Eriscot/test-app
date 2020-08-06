import { createSelector } from "reselect";


const selectSearch = state => state.search;

export const selectSelectedValues = createSelector(
    [selectSearch],
    search => search.selectedValues
);

export const selectValue = createSelector(
    [selectSearch],
    search => search.value
);