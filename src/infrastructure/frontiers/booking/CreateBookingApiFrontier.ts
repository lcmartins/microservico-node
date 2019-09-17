import {Booking} from '../../../domain'
import { HttpResponse } from '../../'

interface CreateBookingApiFrontier {
    create(booking: Booking): Promise<HttpResponse>
}

export {
    CreateBookingApiFrontier
}