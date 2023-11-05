import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {
  readonly API_ENDPOINT = `${environment.API_URL}/secteurActivite`;

  constructor(private httpClient: HttpClient) { }

  getAllSecteurActivites() {
    return this.httpClient.get(`${this.API_ENDPOINT}/retrieve-all-secteurActivite`)
  }
  addSecteurActivite(secteurActivite : any) {
    return this.httpClient.post(`${this.API_ENDPOINT}/add-secteurActivite`, secteurActivite)
  }
  editSecteurActivite(secteurActivite : any){
    return this.httpClient.put(`${this.API_ENDPOINT}/modify-secteurActivite`, secteurActivite)
  }
  deleteSecteurActivite(idSecteurActivite : any){
    return  this.httpClient.delete(`${this.API_ENDPOINT}/remove-secteurActivite/${idSecteurActivite}`)
  }
}
