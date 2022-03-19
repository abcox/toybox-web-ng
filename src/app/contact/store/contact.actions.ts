import { Action } from '@ngrx/store';

export enum ContactActionTypes {
    CONTACT_SEARCH = '[View] Search Contact',
    CONTACT_SEARCH_FAILED = '[View] Search Contact Failed',
    CONTACT_SEARCH_SUCCEEDED = '[View] Search Contact Succeeded',
}
  
export class ContactSearch implements Action {
    readonly type = ContactActionTypes.CONTACT_SEARCH;
    constructor(public payload: any) {}
}
export class ContactSearchFailed implements Action {
    readonly type = ContactActionTypes.CONTACT_SEARCH_FAILED;
    constructor(public payload: any) {}
}
export class ContactSearchSucceeded implements Action {
    readonly type = ContactActionTypes.CONTACT_SEARCH_SUCCEEDED;
    constructor(public payload: any) {}
}

export type All =
| ContactSearch
| ContactSearchFailed
| ContactSearchSucceeded;