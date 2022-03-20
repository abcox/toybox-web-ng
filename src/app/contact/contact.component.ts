import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ContactDto } from 'toybox-backend-ts-ng'; // copy from E:\repos\toybox\toybox-backend-ts-ng\dist to E:\repos\toybox\toybox-backend-ts-ng\node_modules\toybox-backend-ts-ng
import { Store } from '@ngrx/store';
import * as AppState from '../store/app.state';
import * as contactActions from './store/contact.actions';
import { ContactState } from '../contact/store/contact.state'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contacts$: Observable<MatTableDataSource<ContactDto>>;
  displayedColumns: string[] = ['name', 'email', 'phone'];
  state: Observable<any>;

  constructor(
    private store: Store<ContactState>,
    ) {
      this.contacts$ = this.store.select(AppState.getContacts).pipe(
        map(results =>
          new MatTableDataSource<ContactDto>(results)
        )
      );
    }

  ngOnInit(): void {
    this.store.dispatch(contactActions.SearchAction({})); // todo: add paging, filtering, etc.. via contactSearchRequest via API model
  }
}
