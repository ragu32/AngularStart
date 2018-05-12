import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IjsonInterface } from './Interface';

@Injectable()
export class JsonService {
   private _jsonurl='app/Json/newTryJson.json';
   constructor(private _http: Http){}

   getproducts(): Observable<IjsonInterface[]> {
      return this._http.get(this._jsonurl)
      .map((response: Response) => {var jsonData = <IjsonInterface[]> response.json(); return jsonData;});
      //.do(data => console.log(JSON.stringify(data)));
   }
}
