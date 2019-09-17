import { HttpResponse } from ".";

interface HttpProxy {
    get(url: string, httpOptions?: object): Promise<HttpResponse>;
    post(url: string, body: string, httpOptions?: object): Promise<HttpResponse>;
    put(url: string, body: string, httpOptions?: object): Promise<HttpResponse>;
}

export {
    HttpProxy
}