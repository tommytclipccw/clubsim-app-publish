import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LogUtil} from '../utils/LogUtil';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        LogUtil.d('AuthGuard');
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
