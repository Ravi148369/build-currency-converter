import handleError from "./HandleError.js"
export default async function fetchData(endpoint) {  
    const response = await fetch(endpoint)
        .then(value=> value.json())
        .then(value=> value)
        .catch(handleError)
    return response
}