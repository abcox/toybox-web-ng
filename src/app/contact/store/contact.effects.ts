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
import * as contactActions from './contact.actions';

@Injectable()
export class ContactEffects {

    constructor(
        private actions$: Actions,
        private contactService: ContactService,
        //private router: Router,
    ) {}

    contactSearch$ = createEffect(() => this.actions$.pipe(
        ofType(contactActions.SearchAction),
        map(action => action.payload),
        switchMap(payload =>
            this.contactService.searchContacts().pipe( // todo.. add paging, searching/filtering params
                map(response => {
                    console.log('contactSearch response: ', response);
                    return contactActions.SearchSuccessAction({payload: response.docs});
                }),
                catchError(error => of(contactActions.SearchFailureAction({payload: error})))
            )
        )
    ));
}