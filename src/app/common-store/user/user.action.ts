import { Action } from "@ngrx/store";

export const SIGN_IN_USER: string = "[header] Sign In User";
export const LOG_OUT_USER: string = "[header] Log Out User";
export const USER_SIGNED_IN: string = "[header] User Signed In";

export class UserSignedInAction implements Action {
    readonly type: string = USER_SIGNED_IN;

    constructor(public payload: any) { }
}

export class SignInAction implements Action {
    readonly type: string = SIGN_IN_USER;
    constructor(public payload: any) { }
}

export class LogOutAction implements Action {
    readonly type: string = LOG_OUT_USER;
    constructor(public payload: any) { }
}

