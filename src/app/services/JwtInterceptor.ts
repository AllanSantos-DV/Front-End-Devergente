import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        const authorizationHeader = event.headers.get('Authorization');
        if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
          const newToken = authorizationHeader;
          localStorage.setItem('token', newToken);
        }
      }
    }));
  }
}
