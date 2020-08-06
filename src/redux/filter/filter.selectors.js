import { createSelector } from "reselect";

const selectFilter = state => state.filter;

export const selectOpen = createSelector(
    [selectFilter],
    filter => filter.open
);