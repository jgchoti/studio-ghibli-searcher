import { renderPagination } from "../components/render-pagination.js";
import { renderResults } from "../components/render-results.js";
import { filteredState } from "../data/state.js";
import { renderError } from "../components/render-error.js";
import { filterItems } from "../logic/filter-items.js";

export const filterHandler = (filterBy) => {
    const errorDiv = document.getElementById('error-container')
    if (errorDiv) {
        errorDiv.remove()
    }
    const allCheckbox = document.querySelector('input[value="all"]');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    if (filterBy === 'all') {
        checkboxes.forEach(checkbox => {
            if (checkbox.value !== 'all') {
                checkbox.checked = false;
            }
        });
    } else {
        allCheckbox.checked = false;
    }

    const isChecked = [...checkboxes].some(checkbox => {
        return checkbox.value !== 'all' && checkbox.checked;
    });

    if (!isChecked) {
        allCheckbox.checked = true;
        filterBy = 'all'
    }

    let filters = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            filters.push(checkbox.value);
        }
    });
    // console.log(filters)
    filterItems(filters);

    if (filteredState.length === 0) {
        renderError('no items that match your current filters.', true)
    }

    renderResults()
    renderPagination()
};
