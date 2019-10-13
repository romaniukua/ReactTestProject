export default class ReqresService {
    _apiBase = 'https://reqres.in/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}` + ` received ${res.status}`);
        }

        return await res.json();
    }

    async deleteUser(url) {
        await fetch(`${this._apiBase}${url}`, {
            method: 'DELETE'
        });
    }

    async updateUser(url, data) {
        await fetch(`${this._apiBase}${url}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
}