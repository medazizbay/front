import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_ENDPOINT = `${environment.API_URL}/produit`;

  constructor(private httpClient: HttpClient) { }
  getAllProducts() {
    return this.httpClient.get(`${this.API_ENDPOINT}/retrieve-all-produits`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_ENDPOINT}/add-produit`, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_ENDPOINT}/modify-produit`, product)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${this.API_ENDPOINT}/remove-produit/${idProduct}`)
  }

}
