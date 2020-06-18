import tokenService from './tokenService'

const BASE_URL = '/api/carsonPosts'

export function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function create(carsonPost) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(carsonPost)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(carsonPost) {
    return fetch(`${BASE_URL}/${carsonPost._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(carsonPost)
    }).then(res => res.json())
}
//second part to update above
export function findNewCarsonPost(id) {
    console.log(id)
    return fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() }
    }).then(res => res.json())
}