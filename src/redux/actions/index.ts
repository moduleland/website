import {AnyAction} from 'redux';
import {
    FetchMyselfFailed,
    FetchMyselfModuleCodeSuccess,
    FetchMyselfSuccess,
    UpdateMyselfFailed,
    UpdateMyselfSuccess
} from "./MyselfActions";
import {
    AddModuleFailed,
    AddModulesSuccess,
    AddModuleSuccess,
    DeleteModuleFailed,
    DeleteModuleSuccess,
    FetchCurrentModuleFailed,
    FetchCurrentModuleSuccess,
    FetchLastModulesFailed,
    FetchLastModulesSuccess, SearchModuleFailed, SearchModuleSuccess
} from "./ModulesActions";
import {AddUsersSuccess, FetchCurrentUserFailed, FetchCurrentUserSuccess} from "./UsersActions";

export enum ActionTypeNames {
    FETCH_MYSELF_SUCCESS = '@@FETCH_MYSELF_SUCCESS',
    FETCH_MYSELF_FAILED = '@@FETCH_MYSELF_FAILED',

    UPDATE_MYSELF_SUCCESS = '@@UPDATE_MYSELF_SUCCESS',
    UPDATE_MYSELF_FAILED = '@@UPDATE_MYSELF_FAILED',

    FETCH_MYSELF_MODULE_CODE_SUCCESS = '@@FETCH_MYSELF_MODULE_CODE_SUCCESS',

    FETCH_TOP_MODULES_SUCCESS = '@@FETCH_TOP_MODULES_SUCCESS',
    FETCH_TOP_MODULES_FAILED = '@@FETCH_TOP_MODULES_FAILED',

    FETCH_CURRENT_MODULE_SUCCESS = '@@FETCH_CURRENT_MODULE_SUCCESS',
    FETCH_CURRENT_MODULE_FAILED = '@@FETCH_CURRENT_MODULE_FAILED',

    ADD_MODULES_SUCCESS = '@@ADD_MODULES_SUCCESS',

    ADD_MODULE_SUCCESS = '@@ADD_MODULE_SUCCESS',
    ADD_MODULE_FAILED = '@@ADD_MODULE_FAILED',

    DELETE_MODULE_SUCCESS = '@@DELETE_MODULE_SUCCESS',
    DELETE_MODULE_FAILED = '@@DELETE_MODULE_FAILED',

    SEARCH_MODULES_SUCCESS = '@@SEARCH_MODULES_SUCCESS',
    SEARCH_MODULES_FAILED = '@@SEARCH_MODULES_FAILED',

    ADD_USERS_SUCCESS = '@@ADD_USERS_SUCCESS',
    FETCH_CURRENT_USER_SUCCESS = '@@FETCH_CURRENT_USER_SUCCESS',
    FETCH_CURRENT_USER_FAILED = '@@FETCH_CURRENT_USER_FAILED',

}

export interface DefaultAction extends AnyAction {
    type: ActionTypeNames
}

export type ActionTypes =
    | FetchMyselfSuccess
    | FetchMyselfFailed

    | UpdateMyselfSuccess
    | UpdateMyselfFailed

    | FetchLastModulesSuccess
    | FetchLastModulesFailed

    | FetchMyselfModuleCodeSuccess

    | AddModulesSuccess

    | AddModuleSuccess
    | AddModuleFailed

    | DeleteModuleSuccess
    | DeleteModuleFailed

    | FetchCurrentModuleSuccess
    | FetchCurrentModuleFailed

    | SearchModuleSuccess
    | SearchModuleFailed

    | AddUsersSuccess

    | FetchCurrentUserSuccess
    | FetchCurrentUserFailed;
