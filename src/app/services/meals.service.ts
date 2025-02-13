import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Seafood')
  }

}
