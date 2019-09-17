import { HttpProxy, HttpResponse } from ".";
import axios from 'axios';

class AxiosHttpProxy implements HttpProxy {

    get<T>(url: string, httpOptions?: object): Promise<HttpResponse> {
        throw new Error("Method not implemented.");
    }    
    
    async post<T>(url: string, body: string, httpOptions?: object): Promise<HttpResponse> {
        return await axios
        .post(url,  body, httpOptions)
        .then(res => {
            return new Promise<HttpResponse>( resolve => {
                resolve({ status: res.status, body: res.data });
            })}
        )
        .catch(err=> { return Promise.reject({ status: 500, body: err.message}) })
    }

    put<T>(url: string, body: string, httpOptions?: object): Promise<HttpResponse> {
        throw new Error("Method not implemented.");
    }
}

export {
    AxiosHttpProxy
}
