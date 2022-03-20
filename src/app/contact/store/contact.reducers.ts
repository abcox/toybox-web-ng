import { createReducer, on } from '@ngrx/store'
import { ContactState } from './contact.state';
import * as contactActions from './contact.actions';

export const initialState: ContactState = {
    contacts: [],
    contactSearchRequest: {}, // todo: implement API model ContactSearchRequest
    message: null,
    isLoading: false,
};

export const Reducer = createReducer(initialState,
    on(contactActions.SearchSuccessAction, (state, { payload }) => {
        console.log('SearchSuccessAction payload: ', payload)
        return {...state, contacts: payload, message: 'Contact search successful', isLoading: false};
    })
);