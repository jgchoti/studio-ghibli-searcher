import { renderResultsPerPage } from "./render-result-per-page.js";
import { renderPhotoError } from "./render-photo-error.js";

/**
 * Document me!
 *
 * @returns
 */
export const renderFilmsResults = () => {
    const outputContainer = document.getElementById('output')
    let resultContainer = document.getElementById('result-container');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.id = 'result-container';
        outputContainer.appendChild(resultContainer);
    } else {
        resultContainer.innerHTML = '';
    }

    let currentResult = renderResultsPerPage()

    currentResult.forEach(item => {
        const container = document.createElement('div')
        container.classList.add('item-card')
        resultContainer.appendChild(container)

        //photo
        const imgEl = document.createElement('img')
        imgEl.classList.add('item-img')
        imgEl.onerror = () => renderPhotoError(imgEl)
        imgEl.src = item.image
        container.appendChild(imgEl)
        const infoContainer = document.createElement('div')
        infoContainer.classList.add('item-info')
        const ulEl = document.createElement('ul')

        let itemInfo = {
            'Name': item.title,
            'Release Date': item.release_date,
            'Description': item.description,
            'Director': item.director,
            'Producer': item.producer,
        }

        for (const key in itemInfo) {
            if (key === 'Name') {
                const titleEl = document.createElement('h3')
                titleEl.innerText = `${itemInfo[key]}`
                infoContainer.appendChild(titleEl)
            } else if (itemInfo[key] && itemInfo[key].length !== 0) {
                const liEl = document.createElement('li')
                liEl.innerHTML = `<span>${key !== 'Description' ? key + ":" : ""}</span> ${itemInfo[key]}`
                ulEl.appendChild(liEl)
            }
        }
        infoContainer.appendChild(ulEl)
        container.appendChild(infoContainer)
    })

}




