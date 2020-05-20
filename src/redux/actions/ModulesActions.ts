import {
    DefaultAction,
    ActionTypeNames
} from "./index";
import {User} from "../types/UserTypes";
import {Module} from "../types/ModuleTypes";

export interface AddModuleSuccess extends DefaultAction {
    type: typeof ActionTypeNames.ADD_MODULE_SUCCESS
    module: Module
}

export interface AddModuleFailed extends DefaultAction {
    type: typeof ActionTypeNames.ADD_MODULE_FAILED
}

export interface FetchLastModulesSuccess extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_TOP_MODULES_SUCCESS
    last_modules: Module[]
}

export interface FetchLastModulesFailed extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_TOP_MODULES_FAILED
}

export interface AddModulesSuccess extends DefaultAction {
    type: typeof ActionTypeNames.ADD_MODULES_SUCCESS
    modules: Module[]
}

export interface DeleteModuleSuccess extends DefaultAction {
    type: typeof ActionTypeNames.DELETE_MODULE_SUCCESS
    id: string;
}

export interface DeleteModuleFailed extends DefaultAction {
    type: typeof ActionTypeNames.DELETE_MODULE_FAILED
}


export interface FetchCurrentModuleSuccess extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_CURRENT_MODULE_SUCCESS
    current_module: Module
}

export interface FetchCurrentModuleFailed extends DefaultAction {
    type: typeof ActionTypeNames.FETCH_CURRENT_MODULE_FAILED
}

export interface SearchModuleSuccess extends DefaultAction {
    type: typeof ActionTypeNames.SEARCH_MODULES_SUCCESS
    search_modules: Module[]
}

export interface SearchModuleFailed extends DefaultAction {
    type: typeof ActionTypeNames.SEARCH_MODULES_FAILED
}

