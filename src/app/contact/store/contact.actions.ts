import { createAction, props } from '@ngrx/store';
import { ContactDto } from 'toybox-backend-ts-ng';

export const SearchAction = createAction(
    '[CONTACT] Search',
    props<{ payload?: any}>()
);
export const SearchFailureAction = createAction(
    '[CONTACT] Search Failure',
    props<{ payload: any}>()
);
export const SearchSuccessAction = createAction(
    '[CONTACT] Search Success',
    props<{ payload: ContactDto[]}>()
);