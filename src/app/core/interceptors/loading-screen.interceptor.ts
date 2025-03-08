import { HttpInterceptorFn } from '@angular/common/http';

export const loadingScreenInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
