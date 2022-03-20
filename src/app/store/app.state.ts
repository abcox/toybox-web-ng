import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactState } from '../contact/store/contact.state'

export interface AppState {
    contactState: ContactState;
}

export const getContactState = createFeatureSelector<ContactState>('contactState');

export const getContacts = createSelector(
    getContactState, 
    (state: ContactState) => state.contacts 
);