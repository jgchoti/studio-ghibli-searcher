import { perPageSelectorHandler } from "../handlers/per-page-selector-handler.js"
import { pageStatus } from "../data/state.js";

export const perPageSelectorListener = (selectId) => {
    const selectEl = document.getElementById(selectId);

    selectEl.addEventListener('change', (event) => {
        pageStatus.resultsPerPage = event.target.value;
        console.log(`Selected value: ${pageStatus.resultsPerPage}`);
        perPageSelectorHandler();
    });
};


