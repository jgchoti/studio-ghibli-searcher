import { fetchInfo } from "../api-calls/fetch-info.js";

export const infoFetchHandler = async (item) => {

    const speciesPromise = item.species?.length > 0 ? fetchInfo(item.species) : Promise.resolve([]);
    const peoplePromise = item.people?.length > 0 ? fetchInfo(item.people) : Promise.resolve([]);
    const locationsPromise = item.locations?.length > 0 ? fetchInfo(item.locations) : Promise.resolve([]);
    const vehiclesPromise = item.vehicles?.length > 0 ? fetchInfo(item.vehicles) : Promise.resolve([]);
    const residentsPromise = item.residents?.length > 0 ? fetchInfo(item.residents) : Promise.resolve([]);
    const pilotPromise = item.pilot?.length > 0 ? fetchInfo(item.pilot) : Promise.resolve([]);
    console.log(peoplePromise)
    const [species, people, locations, vehicles, residents, pilot] = await Promise.all([speciesPromise, peoplePromise, locationsPromise, vehiclesPromise, residentsPromise, pilotPromise]);


    let itemInfo = {
        'Name': item.title ? item.title : item.name,
        'Release Date': item.release_date,
        'Description': item.description,
        'Director': item.director,
        'Producer': item.producer,
        'Classification': item.classification,
        'Age': item.age,
        'Gender': item.gender,
        'Climate': item.climate,
        'Terrain': item.terrain,
        'Vehicle Type': item.vehicle_class,
        'Species': species,
        'Characters': people,
        'Locations': locations,
        'Vehicles': vehicles,
        "Residents": residents,
        "Pilot": pilot
    };

    return itemInfo
}