import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {
  readonly API_ENDPOINT = `${environment.API_URL}/operateur`;

  constructor(private httpClient: HttpClient) { }

  getAllOperateurs() {
    return this.httpClient.get(`${this.API_ENDPOINT}/retrieve-all-operateurs`)
  }
  addOperateur(operateur : any) {
    return this.httpClient.post(`${this.API_ENDPOINT}/add-operateur`, operateur)
  }
  editOperateur(operateur : any){
    return this.httpClient.put(`${this.API_ENDPOINT}/modify-operateur`, operateur)
  }
  deleteOperateur(idOperateur : any){
    return  this.httpClient.delete(`${this.API_ENDPOINT}/remove-operateur/${idOperateur}`)
  }
}
