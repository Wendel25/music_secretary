import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { catchError, timeout } from 'rxjs/operators';
import { throwError, TimeoutError } from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            timeout(20000),
            catchError(err => {
                if (err instanceof TimeoutError) {
                    throw new RequestTimeoutException('Request timed out after 20 seconds');
                }
                return throwError(() => err);
            })
        );
    }
}
