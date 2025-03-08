import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {

  if (localStorage.getItem('userToken')) {
    const token=localStorage.getItem('userToken') as string;
    req=req.clone({
      setHeaders:{
        token:token,
      }
    });
  };
  return next(req);
};
