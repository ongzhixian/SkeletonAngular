import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) {}

  configUrl = 'http://127.0.0.1:31000/api/echo';

  getPrices() {
    return this.http.get(this.configUrl, {responseType: 'text'}).subscribe(o => {
      console.log(o);
    });
  }
}
