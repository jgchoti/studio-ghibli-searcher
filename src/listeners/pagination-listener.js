import { renderResults } from '../components/render-results.js';
import { renderPagination } from '../components/render-pagination.js';
import { pageStatus } from '../data/state.js';

export const paginationListener = (id, totalPages) => {

    const button = document.getElementById(id);
    if (button) {
        button.addEventListener('click', () => {
            let newPage = pageStatus.currentPage;
            // console.log(newPage)
            if (id.startsWith('btn-first')) {
                newPage = 1;
            } else if (id.startsWith('btn-prev')) {
                newPage = Math.max(pageStatus.currentPage - 1, 1);
            } else if (id.startsWith('btn-next')) {
                newPage = Math.min(pageStatus.currentPage + 1, totalPages);
            } else if (id.startsWith('btn-last')) {
                newPage = totalPages;
            }
            pageStatus.currentPage = newPage

            renderResults();
            renderPagination();
        });
    }
};
