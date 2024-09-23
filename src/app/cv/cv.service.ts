import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class CvService{
    constructor(private http: HttpClient){}
    public getData(key: string) : Observable<any>{
        return this.http.get(`./assets/${key}.json`);
    }
}