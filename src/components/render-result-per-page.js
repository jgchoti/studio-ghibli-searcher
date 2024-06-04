import { filteredState, pageStatus } from "../data/state.js";

export const renderResultsPerPage = (result = filteredState) => {
    const start = (pageStatus.currentPage - 1) * pageStatus.resultsPerPage;
    const end = start + pageStatus.resultsPerPage;
    const currentResults = result.slice(start, end);

    return currentResults;
};