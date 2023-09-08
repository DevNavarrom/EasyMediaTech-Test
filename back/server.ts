import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import { Router } from 'express';

export default class Servidor {
    private server: http.Server;
    private app: express.Application;
    private port: number;

    private static _instance: Servidor;

    private constructor(port: number) {
        this.port = port;
        this.app = express();

        this.app.use( function(req, res, next){
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Requested-With,content-type');
            next();
        });

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.server = http.createServer(this.app);
    }

    public static getInstance(port: number): Servidor {
        if (this._instance) {
            return this._instance;
        } else {
            this._instance = new Servidor(port);
            return this._instance;
        }
    }

    public addRoutes(routes: Map<string, Router>) {
        routes.forEach((route: Router, routeRoot: string) => {
            this.app.use(routeRoot, route);
        });
    }

    public initialize(callback: IFunction): void {
        this.server.listen(this.port, callback);
    }
}

interface IFunction {
    (): void;
}