import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {LogUtil} from '../util/LogUtil';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = localStorage.getItem('userAuth'); // JSON.parse(localStorage.getItem('currentUser'));
        // LogUtil.d(currentUser);
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser}`
                }
            });
        }

        return next.handle(request);
    }
}
