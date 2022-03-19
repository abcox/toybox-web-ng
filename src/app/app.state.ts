import { createFeatureSelector } from '@ngrx/store';
import * as contact from './contact/store/contact.reducers';

export interface AppState {
    contactState: contact.State;
}

export const reducers = {
    contact: contact.reducer,
};

export const ContactStateSelector = createFeatureSelector<AppState>('contact');