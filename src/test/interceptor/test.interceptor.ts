import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Request } from 'express';

Injectable();
export class TestInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    request.body.name = 'this is the name';
    return next.handle().pipe(
      map((data) => {
        data = 'From interceptor';
        return data;
      }),
    );
  }
}
 