import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    constructor() { }

    private selectedPortfolioSubject = new Subject<Portfolio>();

    getPortfolioList(): Portfolio[] {
        return [
            { id: "pf1", name: "pf1 name", description: "desc1" },
            { id: "pf2", name: "pf2 name", description: "desc2" },
            { id: "pf3", name: "pf3 name", description: "desc3" },
        ];
    }

    public setData(message: Portfolio) {
        this.selectedPortfolioSubject.next(message);
    }
     
    public getData(): Observable<Portfolio> {
        return this.selectedPortfolioSubject.asObservable();
    }
}
