import { filterListener } from "../listeners/filter-listener.js";
import { BTN_FILTER } from "../data/constant.js";
export const renderFilter = () => {
    const outputContainer = document.getElementById('output');
    const container = document.createElement('div');
    container.id = 'filter-container'

    for (const key in BTN_FILTER) {
        const labelEl = document.createElement('label')
        labelEl.className = "checkbox-filter"

        const textEl = document.createElement('span');
        textEl.innerText = BTN_FILTER[key]

        const inputEl = document.createElement('input')
        inputEl.type = "checkbox"
        if (key === 'all') {
            inputEl.checked = true
        }
        inputEl.value = key

        labelEl.appendChild(inputEl);
        labelEl.appendChild(textEl);

        filterListener(inputEl)
        container.appendChild(labelEl)
    }

    outputContainer.appendChild(container);
};

