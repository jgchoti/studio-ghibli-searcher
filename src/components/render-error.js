import { ERROR_PIC, FILTER_ERROR } from '../data/constant.js'
import { filterListener } from '../listeners/filter-listener.js'

export const renderError = (message, filtered = false) => {
    const container = document.getElementById('output')
    if (!filtered) {
        container.innerHTML = ""
    }

    const errorContainer = document.createElement('div')
    errorContainer.id = 'error-container'

    const pEl = document.createElement('p')
    pEl.innerText = message
    pEl.classList.add('error-message')
    errorContainer.appendChild(pEl)

    const imgEl = document.createElement('img')
    imgEl.src = !filtered ? ERROR_PIC : FILTER_ERROR
    imgEl.classList.add('error-pic')
    errorContainer.appendChild(imgEl)

    if (filtered) {
        const buttonEl = document.createElement('button')
        buttonEl.innerText = 'Clear All Filters'
        buttonEl.value = 'all'
        buttonEl.classList.add('btn-reset-filter')
        errorContainer.appendChild(buttonEl)
        filterListener(buttonEl)
    }

    if (filtered) {
        container.insertBefore(errorContainer, container.lastElementChild)
    }
    else {
        container.appendChild(errorContainer)
    }
}

