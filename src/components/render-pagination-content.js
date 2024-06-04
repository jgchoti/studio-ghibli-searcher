import { BTN_LIST } from "../data/constant.js";
import { renderPerPageSelect } from "./render-per-page-select.js";
import { pageStatus } from "../data/state.js"

export const renderPaginationContent = (container, totalPages) => {
    const selector = renderPerPageSelect(container.id, totalPages)
    container.appendChild(selector)

    const currentPageContainer = document.createElement('div');
    const pEl = document.createElement('p');
    pEl.innerHTML = `Page <span class="page-number">${pageStatus.currentPage}</span> of <span class="page-number">${totalPages}</span>`;
    currentPageContainer.appendChild(pEl);
    container.appendChild(currentPageContainer);

    const buttonsContainer = document.createElement('div');
    for (const key in BTN_LIST) {
        const buttonEl = document.createElement('button');
        buttonEl.innerHTML = BTN_LIST[key];
        buttonEl.id = `${key}-${container.id}`;
        buttonsContainer.appendChild(buttonEl);
    }
    container.appendChild(buttonsContainer);
};
