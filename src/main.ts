import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

//Global Middleware
// function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
//   console.log('This is global middleware Number 1');
//   next();
// }

// function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
//   console.log('This is global middleware Number 2');
//   next();
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(globalMiddleWareOne);
  // app.use(globalMiddleWareTwo);

  await app.listen(3000);
}
bootstrap();
