import { sortSelectorHandler } from "../handlers/sort-selector-handler.js"

export const sortSelectorListener = (selectEl) => {
    selectEl.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log(`Selected value: ${selectedValue}`);
        sortSelectorHandler(selectedValue);
    });

}

