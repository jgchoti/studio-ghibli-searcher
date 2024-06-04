import { renderPagination } from '../components/render-pagination.js';
import { renderResults } from '../components/render-results.js';
// import { state } from "../data/state.js";
import { sortAlphabet } from '../logic/sort-alphabet.js';

export const sortSelectorHandler = (sortBy = 'default') => {
    if (sortBy === 'sort') {
        sortAlphabet('sort');
    } else if (sortBy === 'reverse') {
        sortAlphabet('reverse');
    } else {
        sortAlphabet('default');
    }
    renderResults();
    renderPagination();
}