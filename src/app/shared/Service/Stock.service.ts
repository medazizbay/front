import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  readonly API_ENDPOINT = `${environment.API_URL}/stock`;

  constructor(private httpClient: HttpClient) { }

  getAllStocks() {
    return this.httpClient.get(`${this.API_ENDPOINT}/retrieve-all-stocks`)
  }
  addStock(stock : any) {
    return this.httpClient.post(`${this.API_ENDPOINT}/add-stock`, stock)
  }
  editStock(stock : any){
    return this.httpClient.put(`${this.API_ENDPOINT}/modify-stock`, stock)
  }
  deleteStock(idStock : any){
    return  this.httpClient.delete(`${this.API_ENDPOINT}/remove-stock/${idStock}`)
  }
}
