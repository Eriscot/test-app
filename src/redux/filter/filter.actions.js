import { FilterTypes } from "./filter.types";

export const openFilter = () => ({
    type: FilterTypes.FILTER_OPEN
});

export const closeFilter = () => ({
    type: FilterTypes.FILTER_CLOSE
});