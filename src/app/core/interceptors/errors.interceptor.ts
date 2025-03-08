import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error)=>{
    console.log(error);
    return throwError(()=>error);
  }));
};
