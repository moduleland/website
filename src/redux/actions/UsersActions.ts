import {
    DefaultAction,
    ActionTypeNames
} from "./index";
import {User} from "../types/UserTypes";
import {Module} from "../types/ModuleTypes";

export interface AddUsersSuccess extends DefaultAction {
    type: typeof ActionTypeNames.ADD_USERS_SUCCESS
    users: User[]
}

export interface FetchCurrentUserSuccess extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_CURRENT_USER_SUCCESS
    current_user: User
}

export interface FetchCurrentUserFailed extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_CURRENT_USER_FAILED
}

