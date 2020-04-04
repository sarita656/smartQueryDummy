import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(public http:HttpClient) { }

getFinanceData(){
  return this.http.get('https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ');

}

}
