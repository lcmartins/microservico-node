import express from 'express';
import * as bodyParser from 'body-parser';
import { ResourceRoute } from './routes/ResourceRoute';

class Application {
    private express: express.Express;

    constructor() {
        this.express = express();
        this.configure();
        this.startRoutes();
    }

    public start(): void {
        const port = 3000;
        this.express.set('port', port);

        this.express.listen(port, () => {
            console.log('server up in port: ', port);
        }).on('error', (error: Error) => {
            console.log(error.message);
        })
    }

    private configure(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }
    private startRoutes(): void {
        const router = express.Router();
        ResourceRoute.start(router)
        this.express.use(router);
    }
}

export default new Application().start();