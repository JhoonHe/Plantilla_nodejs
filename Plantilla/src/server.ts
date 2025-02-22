import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import test from './routes/test';

class Server {

    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({ credentials: true, origin: ['http://localhost:4200', '*'] }));
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use('/test', test);
    }
}

export default Server;