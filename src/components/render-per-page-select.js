import { filteredState, pageStatus } from "../data/state.js";

export const renderPerPageSelect = (id, totalPages) => {
    const container = document.createElement('div')
    const selectId = `selector-${id}`

    const perPageLabel = document.createElement('label');
    perPageLabel.htmlFor = selectId
    perPageLabel.innerText = 'Results per page'
    container.appendChild(perPageLabel)

    let maxResultsPerPage = filteredState.length

    const selectEl = document.createElement('select')
    selectEl.id = selectId

    for (let i = 1; i <= maxResultsPerPage; i++) {
        const optionEl = document.createElement('option')
        optionEl.value = i
        optionEl.innerText = i
        if (i === maxResultsPerPage && totalPages === 1) {
            optionEl.selected = true;
        } else if (i === Number(pageStatus.resultsPerPage)) {
            optionEl.selected = true;
        }
        selectEl.appendChild(optionEl)

    }

    container.appendChild(selectEl);

    return container
}

