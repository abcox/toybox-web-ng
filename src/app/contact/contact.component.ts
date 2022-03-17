import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ContactDto, ContactService } from 'toybox-backend-ts-ng';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contacts: Observable<any>;
  dataSource = new MatTableDataSource<ContactDto>();
  displayedColumns: string[] = ['name', 'email', 'phone'];

  constructor(
    private contactService: ContactService
    ) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.contacts.subscribe(resp => {
      console.log("resp: ", resp);
      this.dataSource = resp;
    });
  }

  getContacts() {
  }

}
