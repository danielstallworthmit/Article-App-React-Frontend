import superagent from 'superagent';

const API_ROOT = 'http://conduit.productionready.io/api/';

const responseBody = res => res.body;

const requests = {
    get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody),
    post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
}

const Articles = {
    all: page => requests.get('articles?limit=10')
}

const Auth = {
    login: (email, password) => {
        requests.post('/users/login', {user: {email, password} })
    }
}

export default {
    Articles,
    Auth
}