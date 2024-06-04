import { renderPaginationContent } from "./render-pagination-content.js";
import { filteredState, pageStatus } from "../data/state.js";
import { BTN_LIST } from '../data/constant.js';
import { perPageSelectorListener } from '../listeners/per-page-selector-listener.js';
import { paginationListener } from '../listeners/pagination-listener.js';


export const renderPagination = (result = filteredState) => {

    let totalPages = Math.ceil(result.length / pageStatus.resultsPerPage)
    if (totalPages === 0 || isNaN(totalPages)) {
        totalPages = 1
    }
    if (pageStatus.currentPage > totalPages) {
        pageStatus.currentPage = 1
    }
    let topPaginationContainer = document.getElementById('top-pagination');
    if (!topPaginationContainer) {
        const outputContainer = document.getElementById('output');
        topPaginationContainer = document.createElement('div');
        topPaginationContainer.id = 'top-pagination';
        outputContainer.insertBefore(topPaginationContainer, outputContainer.firstElementChild);
    } else {
        topPaginationContainer.innerHTML = '';
    }

    let bottomPaginationContainer = document.getElementById('bottom-pagination');
    if (!bottomPaginationContainer) {
        const outputContainer = document.getElementById('output');
        bottomPaginationContainer = document.createElement('div');
        bottomPaginationContainer.id = 'bottom-pagination';
        outputContainer.appendChild(bottomPaginationContainer);
    } else {
        bottomPaginationContainer.innerHTML = '';
    }

    renderPaginationContent(topPaginationContainer, totalPages);
    renderPaginationContent(bottomPaginationContainer, totalPages);

    perPageSelectorListener(`selector-top-pagination`);
    perPageSelectorListener(`selector-bottom-pagination`);
    for (const key in BTN_LIST) {
        paginationListener(`${key}-top-pagination`, totalPages);
        paginationListener(`${key}-bottom-pagination`, totalPages);
    }
}



