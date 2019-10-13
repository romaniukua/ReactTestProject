export default class ReqresService {
    _apiBase = 'https://reqres.in/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}` + ` received ${res.status}`);
        }

        return await res.json();
    }
}