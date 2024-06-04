import { renderPagination } from '../components/render-pagination.js';
import { renderResults } from '../components/render-results.js';
import { pageStatus } from '../data/state.js';
export const perPageSelectorHandler = () => {
    renderResults()
    renderPagination()
};

