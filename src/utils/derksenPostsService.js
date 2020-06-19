import tokenService from './tokenService'

const BASE_URL = '/api/derksenPosts'

export function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function create(derksenPost) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(derksenPost)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(derksenPost) {
    return fetch(`${BASE_URL}/${derksenPost._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(derksenPost)
    }).then(res => res.json())
}
//second part to update above
export function findNewDerksenPost(id) {
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