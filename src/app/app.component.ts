import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

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
  credentials = { username: "dan", token: "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF" };
  token!: any;
  creditCards: any;

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    await this.getTocken();
    await this.getCreditCards();
  }
 
  async getTocken(){
    try {
        let local = localStorage.getItem('token');
        if (local) {
          this.token = JSON.parse(local);
        } else {
          const response$ = this.http.post(
          'https://credit-card-list.application.riecken.io/login', this.credentials
          );
          this.token = await lastValueFrom(response$);
          localStorage.setItem('token', JSON.stringify(this.token));
        }
    } catch (error) {
      console.error(error);
    }
  }
    async getCreditCards() {

      const header = new HttpHeaders({
        'Content Type': 'application/json',
        'Authorization': 'Bearer ${this.token.accesToken}'
      });
      try{
        const response$ = this.http.get('https://credit-card-list.application.riecken.io/credit-cards', {headers: header});
        this.creditCards = await lastValueFrom(response$);
        console.log(this.credentials);
      } catch (error) {
        console.log(error);
      }
      }
  }
  
