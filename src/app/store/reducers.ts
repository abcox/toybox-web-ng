import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { Reducer as ContactReducer } from '../contact/store/contact.reducers';

export const reducers: ActionReducerMap<AppState> = {
  contactState: ContactReducer
};
 