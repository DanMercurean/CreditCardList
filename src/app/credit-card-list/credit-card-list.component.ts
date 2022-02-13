import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { formatDate } from '@angular/common';
import {  MatDialog } from "@angular/material/dialog";
import { DialogAddCardComponent } from '../dialog-add-card/dialog-add-card.component';



export interface cards {
  "id": string,
  "owner": string,
  "number": number,
  "cvv": number,
  "expiration": string
}

const ELEMENT_DATA: cards[] = [
  { id: '1', owner: 'Dan', number: 1000.0079, cvv: 266, expiration: '31.02.2022' }
];

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})

export class CreditCardListComponent implements OnInit {

  displayedColumns = ['id', 'owner', 'number', 'cvv', 'expiration'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(DialogAddCardComponent)
  }

}
