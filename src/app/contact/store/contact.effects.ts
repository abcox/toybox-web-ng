import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, delay } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

import {
    //ContactDto,
    ContactService,
} from 'toybox-backend-ts-ng'; // copy from E:\repos\toybox\toybox-backend-ts-ng\dist to E:\repos\toybox\toybox-backend-ts-ng\node_modules\toybox-backend-ts-ng
import {
    ContactActionTypes,
    ContactSearch,
    ContactSearchFailed,
    ContactSearchSucceeded,
} from './contact.actions';

@Injectable()
export class ContactEffects {

    constructor(
        private actions: Actions,
        private service: ContactService,
        //private router: Router,
    ) {}

    ContactSearch: Observable<any> = createEffect(() => {
        return this.actions.pipe(
            //tap((action) => console.log(`Received ${action.type}`)),
            ofType(ContactActionTypes.CONTACT_SEARCH),
            tap((action: ContactSearch) => {
                console.log(`action: ${JSON.stringify(action)}`);
            }),
            map((action: ContactSearch) => action.payload),
            switchMap(payload => {
                return this.service.searchContacts(/* TODO.. */).pipe( // todo.. add paging, searching/filtering params
                    map((response) => {
                        console.log(`ContactSearch (response): ${JSON.stringify(response)}`);
                        return new ContactSearchSucceeded({
                            contacts: response.docs,
                        });
                    }),
                    catchError((error) => { // catchError ?
                        console.log(error);
                        return of(new ContactSearchFailed({ error: error }));
                    })
                );
            })
        );
    });
}