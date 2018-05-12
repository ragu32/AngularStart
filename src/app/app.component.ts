import { Component } from '@angular/core';
import { IjsonInterface } from './Interface/IjsonInterface';
import { JsonService } from './services/json.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'myapp',
  templateUrl:'./html/first.component.html',
  providers: [JsonService]
})
export class AppComponent  {
Ijson: IjsonInterface[];
/*constructor(private _product: JsonService) {
   }

 ngOnInit() : any {
    return this._product.getproducts()
    .subscribe(Ijson => {this.Ijson = Ijson
    console.log(this.Ijson);
  });
}*/

 //private _jsonurl='app/Json/newTryJson.json';
 private _jsonurl = '/api/FirstAngular'
 constructor(private _http: Http){}

 getproducts(): Observable<IjsonInterface[]> {
    return this._http.get(this._jsonurl)
    .map((response: Response) => {var jsonData = <IjsonInterface[]> response.json(); return jsonData;});
    //.do(data => console.log(JSON.stringify(data)));
 }

 ngOnInit() : any {
    return this.getproducts()
    .subscribe(Ijson => {this.Ijson = Ijson
    console.log(this.Ijson);
  })
};
name = 'WOrld';
appTitle: string = "FirstAPP";
appStatus: boolean = true;
abcd: string = "Ragu";
makeList: any[] = [{"Animal":"dog and dog", "url":"https://en.wikipedia.org/wiki/Dog"}, {"Animal":"cat", "url":"https://en.wikipedia.org/wiki/Cat"},
{"Animal":"lion", "url":"https://en.wikipedia.org/wiki/Lion"}];
}
