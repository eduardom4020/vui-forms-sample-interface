import axios from 'axios';

export class VUIFormsAPI {
    constructor() {
        this.connection = axios.create({
            baseURL: 'http://ec2-18-231-159-247.sa-east-1.compute.amazonaws.com:3000/',
            timeout: 1000,
            headers: {'Access-Control-Allow-Origin': '*'}
        });
    }

    async list() {
        return await this.connection.get('/large-form')
            .then(({data, status}) => status === 200 ? data : {error: `Returned status code ${status}`, message: 'Dados Não Encontrados'})
            .catch(error => ({error, message: 'Not Treated Error'}));
    }
}