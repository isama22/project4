import tokenService from './tokenService'

const BASE_URL = '/api/posts'

export function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

 export function create(post) {
    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(post)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(post) {
    return fetch(`${BASE_URL}/${post._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(post)
    }).then(res => res.json())
}


export function findNewPost(id) {
    console.log(id)
    return fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json())
}

// export default {
//   index,
//   create
// }