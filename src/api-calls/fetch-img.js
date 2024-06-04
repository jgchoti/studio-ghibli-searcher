export const fetchImg = async (films) => {
    try {
        const imgPromises = films.map(async (film) => {
            const response = await fetch(film);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}\n-> ${response.url}`);
            }

            const result = await response.json();
            return [result.title, result.movie_banner];
        });

        const filmImgs = await Promise.all(imgPromises);
        return filmImgs;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
};