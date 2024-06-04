import { ORIGIN } from '../../config.js';

export const studioGhibliService = async (type, searchTerm) => {

    const endpoints = {
        'films': '?q',
        'people': '?q',
        'locations': '?q',
        'species': '?q',
        'vehicles': '?q'
    }
    if (type !== 'all') {
        let URL = `${ORIGIN}${type}${endpoints[type]}=${searchTerm}`

        console.log(URL)

        const encodedURL = encodeURI(URL);
        const response = await fetch(encodedURL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
        }

        const result = await response.json();
        return result
    }
    else {
        const results = await Promise.all(
            Object.keys(endpoints).map(async endpoint => {
                let URL = `${ORIGIN}${endpoint}${endpoints[endpoint]}=${searchTerm}`;
                const encodedURL = encodeURI(URL);
                const response = await fetch(encodedURL);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
                }

                const result = await response.json();
                return result;
            })
        );
        return results.flat();
    }

};
