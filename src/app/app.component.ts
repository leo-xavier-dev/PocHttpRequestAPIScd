import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PocHttpRequestAPIScd';

  body = {
    "auth": {
      "Usuario": "email@empresa.com.br",
      "Senha": "1234",
      "CodigoParametro": "123",
      "Chave": "00000000-0000-0000-0000-000000000000"
    },
    "dto": {
      "DocumentoCliente": "47820143000103",
      "DocumentoParceiroCorrespondente": "12345678000199",
      "CodigoOperacao": "1",
      "VlrSolicitado": 1800.01,
      "Prazo": 12,
      "PercJurosNegociado": 0.099,
      "VlrIOF": 25.0,
      "PercIOF": 1.38,
      "PercIOFAdicional": 0.38,
      "VlrParcela": 150.0,
      "VlrTAC": 50.0,
      "VlrBoleto": 0,
      "DtPrimeiroVencto": "2022-01-24",
      "PropostaContaPagamentoDTO": {
        "NumeroBanco": "string",
        "TipoConta": 0,
        "Agencia": "string",
        "AgenciaDig": "string",
        "Conta": "string",
        "ContaDig": "string"
      }
    },
    "PropostaLancamentos": [
      {
        "CampoID": "Boleto",
        "VlrTransacao": 1000.0,
        "DtPagamento": "2020-04-24",
        "LinhaDigitavel": "03399199530490000004504799501012182170003667414",
        "DocumentoFederalCedente": "090400888000142",
        "NomeCedente": "BANCO SANTANDER BRASIL S.A."
      },
      {
        "CampoID": "TED",
        "VlrTransacao": 500.0,
        "NumeroBanco": "string",
        "TipoConta": 0,
        "Agencia": "string",
        "AgenciaDig": "string",
        "Conta": "string",
        "ContaDig": "string",
        "DocumentoFederal": "12345678900",
        "NomePagamento": "Troco"
      }
    ],
    "parametros": [
      {
        "Nome": "PARTNERGUARANTOR",
        "Valor": "1bee7c83-a425-44dc-99c9-7642cab00213"
      },
      {
        "Nome": "WITNESS",
        "Valor": "a51d009b-4363-4f6a-b2b9-e3e2bd43f0d9"
      },
      {
        "Nome": "WITNESS",
        "Valor": "13190081-975b-4026-a2bf-de913a1b75ca"
      },
      {
        "Nome": "INVOICE",
        "Valor": "1234567899876543212345341234123412341234"
      }
    ]
  };

  retorno: any;

  constructor(
    private _appService: AppService
  ) {
  }

  ngOnInit(): void {
    this.handleSubmit();
  }

  handleSubmit(): void {
    this._appService.saveOperacoes(this.body).subscribe({
      next: (response: any) => {
        this.retorno = response;
        console.log(response);
      },
      error: (error: Error) => {
        console.log(error);
      }
    });
  }

}
