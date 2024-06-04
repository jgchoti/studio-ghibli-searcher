import { filterHandler } from "../handlers/filter-handler.js";

export const filterListener = (el) => {
    el.addEventListener('click', (event) => {
        const selectedValue = event.target.value;
        console.log(`Selected value: ${selectedValue}`);
        filterHandler(selectedValue)
    });
}

