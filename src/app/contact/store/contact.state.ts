import { ContactDto } from 'toybox-backend-ts-ng'; // copy from E:\repos\toybox\toybox-backend-ts-ng\dist to E:\repos\toybox\toybox-backend-ts-ng\node_modules\toybox-backend-ts-ng

export interface ContactState {
    // domain specific
    contacts: ContactDto[] | null;
    contactSearchRequest: {} // todo: implement API model ContactSearchRequest

    // common
    message: string | null;     // success / failure
    isLoading: boolean | null;
}
