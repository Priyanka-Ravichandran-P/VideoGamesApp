import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     req = req.clone({
         setHeaders:{
             'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
             'x-rapidapi-key': '83ce856bf3mshacd7f7d96c2b07bp1b5289jsn34de47d0192e'
         },
         setParams:{
             key:'f2f8cec7abcd4602b6a94dcd51cf1e2b'
         }
     });
     return next.handle(req);
    }
}


