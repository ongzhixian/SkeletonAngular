import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeartbeatService {

    constructor() { }

    createHeartbeatService(): Observable<Date> {

        return new Observable(
            observer => {
                setInterval(() =>
                    observer.next(new Date())
                    , 1000);
            }
        );

        // return new Observable(
        //     observer => {
        //       try {
        //         observer.next('Hello from observable');
        
        //         // throw("Got an error");
        //          // some other code can be here
        //       } catch(err) {
        //          observer.error(err);
        //        } finally {
        //          observer.complete();
        //        }
        //     }
        // );
    }
}

