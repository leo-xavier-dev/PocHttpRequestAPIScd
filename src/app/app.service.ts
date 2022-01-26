import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient
  ) {
  }

  saveOperacoes(data: any): Observable<any> {
    return this._http.post(`https://anrscd-dev-api.azurewebsites.net/api-scd/scd/IncluirPropostaManualSimplificado`, data);
  }

}