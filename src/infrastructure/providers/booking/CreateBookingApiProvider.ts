import { HttpResponse } from '../../';
import { HttpProxy } from '../../';
import { CreateBookingApiFrontier } from "../../frontiers";
import { Booking } from "../../../domain";
class CreateBookingApiProvider implements CreateBookingApiFrontier {
    private readonly requestOptions = {
        headers: { 'Content-Type': 'application/json' }
    };
    private readonly JAVA_SCHEDULING_URL = 'http://localhost:7080/booking';
    
    constructor(private httpProxy: HttpProxy) {}

    async create(booking: Booking): Promise<HttpResponse> {
        return await this.httpProxy.post(this.JAVA_SCHEDULING_URL, booking.toJSON(), this.requestOptions);
    }
}

export {
    CreateBookingApiProvider
}