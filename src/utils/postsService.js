import tokenService from './tokenService'

const BASE_URL = '/api/posts'

function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

 function create(post) {
    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer' + tokenService.getToken()
        },
        body: JSON.stringify(post)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export default {
  index,
  create
}