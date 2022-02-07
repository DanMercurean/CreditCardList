import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CreditCardList';

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.post('https://credit-card-list.application.riecken.io/', { "username": "dan", "password": "LAE2xIA2avaeor768enivaR3783583VAeVaea7ioaF" })
      .subscribe(
        {
          next: (response) => { console.log(response) },
          error: (error) => { console.error(error) },
          complete: () => { console.warn("OBSERVER COMPLETE") }
        }
      )
  }
}
