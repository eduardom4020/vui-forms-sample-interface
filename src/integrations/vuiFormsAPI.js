import axios from 'axios';
import { LargeForm } from '../entities/largeForm';
import { DADOS_NAO_ENCONTRADOS, CRIACAO_NAO_REALIZADA, API_TIMEOUT } from '../constants';

export class VUIFormsAPI {
    constructor() {
        this.connection = axios.create({
            baseURL: 'http://ec2-18-231-159-247.sa-east-1.compute.amazonaws.com:3000/',
            timeout: API_TIMEOUT,
            headers: {'Access-Control-Allow-Origin': '*'}
        });
    }

    _treatReturn(promise, onErrorMessage) {
        return promise
            .then(({data, status}) => {
                if(status === 200) {
                    return data.constructor === Array ? data.map(row => new LargeForm(row)) : new LargeForm(data);
                } else {
                    return {error: `Returned status code ${status}`, message: onErrorMessage};
                }
            })
            .catch(error => ({error, message: 'Not Treated Error'}));
    }

    async list() {
        return await this._treatReturn(this.connection.get('/large-form'), DADOS_NAO_ENCONTRADOS);
    }

    async create(largeForm) {
        return await this._treatReturn(this.connection.post('/large-form', largeForm.json()), CRIACAO_NAO_REALIZADA);
    }
}