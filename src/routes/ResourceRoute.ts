import { Router, Request, Response } from 'express';
import {BookingUseCase} from '../usecases';
import { Booking, Resource, User } from "../domain";
import { CreateBookingApiProvider } from '../infrastructure/providers';
import { AxiosHttpProxy } from '../infrastructure';

class ResourceRoute {
    public static start(router: Router) {
        const resourceRoute = new ResourceRoute()
        router.get('/resource', (request: Request, response: Response) => {
            response.send({status: 200, body: 'ok'});
        });

        router.post('/resource', async (request: Request, response: Response) => {
            resourceRoute.bookResource(request, response);
        });
        
    }

    private  async bookResource(request: Request, response: Response): Promise<void> {
        try {
            const apiFrontier = new CreateBookingApiProvider(new AxiosHttpProxy())
            const bookingUseCase = new BookingUseCase(apiFrontier);
            const newBooking = this.mapResource(request);
            const result = await bookingUseCase.book(newBooking);
            response.status(200).send(result);
        } catch (error) {
            response.sendStatus(500);
        }
    }

    private mapResource(request: Request): Booking {
        const requestBody = request.body;
        const newResource = new Resource(requestBody.resource.id);
        const user = new User(requestBody.user.id);
        const newBooking = new Booking(newResource, user, requestBody.beginMiliseconds, requestBody.endMiliseconds);
        return newBooking;
    }
}

export {
    ResourceRoute
}