import axios from 'axios';
import { LargeForm } from '../entities/largeForm';
import { 
    DADOS_NAO_ENCONTRADOS, 
    CRIACAO_NAO_REALIZADA,
    NAO_POSSIVEL_DELETAR,
    API_TIMEOUT, 
    VUI_API_HOST 
} from '../constants';
import socketIOClient from "socket.io-client";

export class VUIFormsAPI {
    socketConnection = null;

    constructor() {
        this.connection = axios.create({
            baseURL: VUI_API_HOST,
            timeout: API_TIMEOUT,
            headers: {'Access-Control-Allow-Origin': '*'}
        });
    }

    _treatReturn(promise, onErrorMessage) {
        return promise
            .then(({data, status}) => {
                if(status === 200) {
                    var result = data.constructor === Array ? data.map(row => new LargeForm(row)) : new LargeForm(data);
                    return Promise.resolve(result);
                } else {
                    var result = {error: `Returned status code ${status}`, message: onErrorMessage};
                    return Promise.reject(result);
                }
            })
            .catch(errorMessage => Promise.reject({error: 'Not Treated Error', message: errorMessage.toString()}));
    }

    async list() {
        if(this.socketConnection !== null) throw 'Unable to call list method in Real Time Mode';

        return await this._treatReturn(this.connection.get('/large-form'), DADOS_NAO_ENCONTRADOS);
    }

    async create(largeForm) {
        return await this.connection.post('/large-form', largeForm.json(), CRIACAO_NAO_REALIZADA);
    }

    async delete(largeForm) {
        return await this.connection.delete(`/large-form/${largeForm.email}`, NAO_POSSIVEL_DELETAR);
    }

    startRealTimeMode() {
        if(this.socketConnection === null) {
            this.socketConnection = socketIOClient(VUI_API_HOST);
        }

        return this;
    }

    cancelRealTimeMode() {
        if(this.socketConnection !== null) {
            this.socketConnection.disconnect();
        }
        
        return this;
    }

    useRealTimeList(listHandler) {
        if(this.socketConnection === null) throw 'Unable to call realTimeList method without Real Time Mode';

        this.socketConnection.on('list', data => {
            listHandler(data);
        });
        
        return this;
    }
}