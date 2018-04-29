import { Injectable } from "@angular/core";
import { HttpSentEvent } from "@angular/common/http";
import { HttpInterceptor, HttpRequest, HttpHeaderResponse, HttpHandler, HttpProgressEvent, HttpResponse } from "@angular/common/http";
import { } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { HttpEvent } from "@angular/common/http";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

       // alert(" Inside HttpInterceptor");

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        //alert(" Inside HttpInterceptor 1");

        if (req.headers.get('No-Auth') == "True") {
            return next.handle(req.clone());
        }

        if (localStorage.getItem('userToken') != null) {

            const cloneRequest = req.clone({

                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'))

            });

            return next.handle(cloneRequest).do(
                (res: any) => { },

                (error: any) => {

                    if (error.status === "401") {

                        this.router.navigate(['/sign-in']);
                    }
                })
        }
        else {
            this.router.navigate(['/sign-in']);
        }
    }
}