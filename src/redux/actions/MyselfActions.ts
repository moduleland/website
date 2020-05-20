import {
    DefaultAction,
    ActionTypeNames
} from "./index";
import {User} from "../types/UserTypes";
import {Code, PrivateModule} from "../types/ModuleTypes";

export interface FetchMyselfSuccess extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_MYSELF_SUCCESS
    myself: User
}

export interface FetchMyselfFailed extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_MYSELF_FAILED
}

export interface UpdateMyselfSuccess extends DefaultAction {
    type: typeof ActionTypeNames.UPDATE_MYSELF_SUCCESS
    myself: User
}

export interface UpdateMyselfFailed extends DefaultAction {
    type: typeof ActionTypeNames.UPDATE_MYSELF_FAILED
}

export interface FetchMyselfModuleCodeSuccess extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_MYSELF_MODULE_CODE_SUCCESS;
    module_id: string;
    code: Code;
}
