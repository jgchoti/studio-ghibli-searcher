import { filteredState } from "../data/state.js";

export const sortAlphabet = (sortBy) => {
    filteredState.sort((a, b) => {
        const nameA = (a.name || a.title).toLowerCase();
        const nameB = (b.name || b.title).toLowerCase();
        const idA = a.id;
        const idB = b.id;

        if (sortBy === 'sort') {
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else if (sortBy === 'reverse') {
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        } else {
            return idA.localeCompare(idB, undefined, { numeric: true, sensitivity: 'base' });
        }
    });
};