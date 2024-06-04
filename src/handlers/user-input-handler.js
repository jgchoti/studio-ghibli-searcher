import { filteredState, state } from '../data/state.js'
import { renderError } from '../components/render-error.js';
import { renderPagination } from '../components/render-pagination.js';
import { renderFilmsResults } from '../components/render-films-results.js';
import { renderSortSelector } from '../components/render-sort-selector.js'
import { renderFilter } from '../components/render-filter.js';
import { studioGhibliService } from '../api-calls/studio-ghibli-service.js';
import { renderResults } from '../components/render-results.js';
import { fetchImg } from '../api-calls/fetch-img.js';

export const userInputHandler = async (event) => {
    const output = document.getElementById('output')
    output.innerHTML = ''
    const type = event.target.parentNode.children[1].value;
    const userInput = event.target.parentNode.children[2].value;


    if (userInput === '') {
        renderError('Input field empty!')
        return
    }
    // console.log(type)
    try {
        const infoPromise = await studioGhibliService(type, userInput);
        if (infoPromise.length === 0) {
            renderError('No results found!');
            return;
        }

        state.length = 0;
        filteredState.length = 0;
        state.push(...infoPromise);

        filteredState.push(...state)
        console.log('state:', state)
        console.log('filter state:', filteredState)


        renderSortSelector()
        renderFilter()
        renderResults()
        renderPagination()

    } catch (err) {
        console.error(err);
        renderError(err.message);
    }
};

