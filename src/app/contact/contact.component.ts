import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ContactDto } from 'toybox-backend-ts-ng'; // copy from E:\repos\toybox\toybox-backend-ts-ng\dist to E:\repos\toybox\toybox-backend-ts-ng\node_modules\toybox-backend-ts-ng
import { Store } from '@ngrx/store';
import { ContactSearch } from './store/contact.actions';
import { AppState, ContactStateSelector } from '../app.state';

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

  dataSource = new MatTableDataSource<ContactDto>();
  displayedColumns: string[] = ['name', 'email', 'phone'];
  state: Observable<any>;

  constructor(
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    this.state = this.store.select<any>(ContactStateSelector);
    this.state.subscribe((state) => {
      console.log('state: ', state);
      this.dataSource = state.contacts.contacts;
    });
    this.store.dispatch(new ContactSearch({}));
  }
}
