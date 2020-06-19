import tokenService from './tokenService'

const BASE_URL = '/api/danaPosts'

export function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function create(danaPost) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(danaPost)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(danaPost) {
    return fetch(`${BASE_URL}/${danaPost._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(danaPost)
    }).then(res => res.json())
}
//second part to update above
export function findNewDanaPost(id) {
    console.log(id)
    return fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() }
    }).then(res => res.json())
}

export function deleteOne(id) {
    console.log(id)
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() }
    }).then(res => res.json())
}
