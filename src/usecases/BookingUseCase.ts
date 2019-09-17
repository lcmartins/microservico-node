import { HttpProxy, HttpResponse } from '../infrastructure';
import {Booking} from './../domain'
import { CreateBookingApiFrontier } from '../infrastructure/frontiers';
class BookingUseCase {

    constructor(private apiFrontier: CreateBookingApiFrontier) {}

    public async book(booking: Booking): Promise<HttpResponse> {
        return await this.apiFrontier.create(booking);
    }
}

export {
    BookingUseCase
}