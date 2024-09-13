import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request , Response} from "express";

@Injectable()
export class BookMiddleWare implements NestMiddleware {

use(req: Request, res: Response, next: NextFunction) {
    let protocol = req.protocol; // http https
    let host = req.get('host'); // localhost
    let url = req.originalUrl; // /users
    let method = req.method; // get post 
    let date = new Date().toDateString(); // current time
    console.log(protocol , host , url , method , date);
    next();
}

 }