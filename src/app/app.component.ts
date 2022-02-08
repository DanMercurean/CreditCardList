import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface token {
  accessToken: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CreditCardList';
  token: Token
  // {"username": "dan", "password": "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF" }
  // {"username": "dan", "password": "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF" }
  | undefined

  // {"username": "dan", "password": "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF" }

  // {"username": "dan", "password": "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF" }
  constructor(private http: HttpClient, token: Token) {
    token: Token
  }
  ngOnInit(): void {
    this.http.post('https://credit-card-list.application.riecken.io/login', { username: "dan", token: "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF" })
      .subscribe(
        {
          next: (token ) => {
            console.log(token)
            this.getCreditCards(token)
          },
          error: (error) => { console.error(error) },
          complete: () => { console.warn("OBSERVER COMPLETE") }
        }
      )
  }
  getCreditCards(token) {

    const header = new HttpHeaders({
      'Content-Type': 'applicatun/json',
      Authorization: `Bearer ${token}`
    })
    console.log(token.parts, token.sourceSpan), token.type;

    token.toLocaleString()
    this.http.get('https://credit-card-list.application.riecken.io/credit-card', { headers: header }).subscribe(
      (resp => console.log(resp)
      )

    )

  }
}
