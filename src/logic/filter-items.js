import { filteredState, state } from "../data/state.js";

export const filterItems = (filters) => {
    let filterResult = [];
    if (filters.includes('all')) {
        filterResult = state;
    } else {
        filterResult = state.filter(item => {
            for (let filter of filters) {
                if (item.hasOwnProperty(filter)) {
                    return true;
                }
            }
            return false;
        });
    }
    filteredState.length = 0;
    filteredState.push(...filterResult);
    console.log(filteredState)
};

