
import { fetchImg } from "../api-calls/fetch-img.js";

export const imgFetchHandler = async (item, container) => {
    try {
        const imageResult = await fetchImg(item.films);
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('preview-films-img');
        console.log(imageResult)
        imageResult.forEach(([title, bannerUrl]) => {
            const pEl = document.createElement('p');
            pEl.innerHTML = `From <span>"${title}"</span>`
            imgContainer.appendChild(pEl);

            const imgEl = document.createElement('img');
            imgEl.src = bannerUrl
            imgContainer.appendChild(imgEl);

        });
        container.appendChild(imgContainer);
    } catch (error) {
        console.error('Error fetching image:', error);

    }
};
