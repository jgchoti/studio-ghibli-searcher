export const fetchInfo = async (infoLists) => {

    if (!Array.isArray(infoLists)) {
        infoLists = [infoLists];
    }
    console.log('fetching', infoLists)
    const infoPromises = infoLists.map(async (info) => {
        try {
            let encodedURL = encodeURI(info);
            let response = await fetch(encodedURL);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}\n-> ${encodedURL}`);

            }

            let result = await response.json();
            return result.name || result.title
        } catch (error) {

            return null;
        }
    });


    const result = await Promise.all(infoPromises);

    return result.filter(result => result !== undefined && result !== null);
};