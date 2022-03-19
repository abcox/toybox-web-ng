import { All, ContactActionTypes } from './contact.actions';
import { ContactDto } from 'toybox-backend-ts-ng'; // copy from E:\repos\toybox\toybox-backend-ts-ng\dist to E:\repos\toybox\toybox-backend-ts-ng\node_modules\toybox-backend-ts-ng

export interface State {
    // domain specific
    contacts: ContactDto[] | null;
    contactSearchRequest: {} // todo: implement API model ContactSearchRequest

    // common
    errorMessage: string | null;
    isLoading: boolean | null;
}

export const initialState: State = {
    contacts: [],
    contactSearchRequest: {}, // todo: implement API model ContactSearchRequest
    errorMessage: null,
    isLoading: false,
};

export function reducer(state = initialState, action: All): State {
    switch (action.type) {

        case ContactActionTypes.CONTACT_SEARCH: {
            return {
            ...state,
            contactSearchRequest: action.payload.contactSearchRequest,
            errorMessage: null,
            isLoading: true,
            };
        }
        case ContactActionTypes.CONTACT_SEARCH_FAILED: {
            return {
            ...state,
            errorMessage: 'Contact seach failed with error: ' + action.payload.errorMessage,
            isLoading: false,
            };
        }
        case ContactActionTypes.CONTACT_SEARCH_SUCCEEDED: {
            console.log(`reducer state (before): ${JSON.stringify(state)}`);
            console.log(`reducer payload: ${JSON.stringify(action.payload)}`);
            let newState = {
                ...state,
                contacts: action.payload.contacts,
                errorMessage: null,
                isLoading: false,
            };
            console.log(`reducer state (after): ${JSON.stringify(newState)}`);
            return newState;
        }        
        default: {
            return state;
        }
    }
}