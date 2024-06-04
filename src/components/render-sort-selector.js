import { sortSelectorListener } from "../listeners/sort-selector-listener.js";

export const renderSortSelector = () => {
    const outputContainer = document.getElementById('output');
    const container = document.createElement('div');
    container.id = 'sort-container'
    const id = 'sort';

    const label = document.createElement('label');
    label.htmlFor = id;

    container.appendChild(label);

    const selectEl = document.createElement('select');
    selectEl.id = id;

    const sortOptions = {
        'default': 'Default',
        'sort': 'From A to Z',
        'reverse': 'From Z to A'
    }
    for (const key in sortOptions) {
        const optionEl = document.createElement('option');
        optionEl.value = key;
        optionEl.innerText = sortOptions[key];
        selectEl.appendChild(optionEl);
    }

    container.appendChild(selectEl);
    sortSelectorListener(selectEl)
    outputContainer.appendChild(container);
};