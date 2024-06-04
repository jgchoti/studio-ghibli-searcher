import { userInputHandler } from '../handlers/user-input-handler.js';

export const btnListener = (id = '') => {
    document.getElementById(id).addEventListener('click', userInputHandler);
};

export const inputListener = (id = '') => {
    const searchInput = document.querySelector('input');
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById(id).click();
        }
    });
}