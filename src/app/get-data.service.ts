import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  url = 'https://jsonplaceholder.typicode.com'

  constructor(private _http: HttpClient) { }

  getData(id: number){
    return this._http.get<any>(`${this.url}/todos/${id}`)
  }
}
