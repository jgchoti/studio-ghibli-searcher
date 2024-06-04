import { renderResultsPerPage } from "./render-result-per-page.js";
import { renderPhotoError } from "./render-photo-error.js";
import { fetchImg } from "../api-calls/fetch-img.js";
import { imgFetchHandler } from "../handlers/img-fetch-handler.js";
import { fetchInfo } from "../api-calls/fetch-info.js";
import { infoFetchHandler } from "../handlers/info-fetch-handler.js";

/**
 * Renders the results on the page.
 */
export const renderResults = async () => {
    const outputContainer = document.getElementById('output');
    let resultContainer = document.getElementById('result-container');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.id = 'result-container';
        outputContainer.appendChild(resultContainer);
    } else {
        resultContainer.innerHTML = '';
    }

    let currentResult = renderResultsPerPage();

    for (const item of currentResult) {
        const container = document.createElement('div');
        container.classList.add('item-card');
        resultContainer.appendChild(container);

        //info
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('item-info');
        const ulEl = document.createElement('ul');

        const fetchedResults = await infoFetchHandler(item);

        for (const key in fetchedResults) {
            if (key === 'Name') {
                const titleEl = document.createElement('h3');
                titleEl.innerText = `${fetchedResults[key]}`;
                infoContainer.appendChild(titleEl);
            } else if (fetchedResults[key] && fetchedResults[key].length !== 0 && fetchedResults[key] !== undefined) {
                const liEl = document.createElement('li');
                if (Array.isArray(fetchedResults[key])) {
                    liEl.innerHTML = `<span>${key !== 'Description' ? key + ":" : ""}</span> ${fetchedResults[key].join(", ")}`;
                } else {
                    liEl.innerHTML = `<span>${key !== 'Description' ? key + ":" : ""}</span> ${fetchedResults[key]}`;
                }
                ulEl.appendChild(liEl);
            }
        }
        infoContainer.appendChild(ulEl);
        container.appendChild(infoContainer);


        // Photo
        console.log(item.image)
        if (item.image) {
            console.log('get src')
            const imgEl = document.createElement('img');
            imgEl.classList.add('item-img');
            imgEl.src = item.image;
            container.insertBefore(imgEl, container.firstChild);
        } else {
            imgFetchHandler(item, container)
        }

    }
}

