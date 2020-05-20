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
} from "../actions/ModulesActions";
import {ActionTypeNames} from "../actions";
import {ApiInstance} from "../../utils/ApiUtils";

export const AddModules: (_: any) => any = (
    modules
): AddModulesSuccess => ({
    type: ActionTypeNames.ADD_MODULES_SUCCESS,
    modules
});

export const FetchLastModules = async (

): Promise<FetchLastModulesSuccess | FetchLastModulesFailed> => {
    try {
        const last_modules = (await ApiInstance().get('modules/last')).data;
        return {
            type: ActionTypeNames.FETCH_TOP_MODULES_SUCCESS,
            last_modules
        }
    } catch (e) {
        return {
            type: ActionTypeNames.FETCH_TOP_MODULES_FAILED
        };
    }
};

export const AddModule: (_: any) => any = async (
    module
): Promise<AddModuleSuccess | AddModuleFailed> => {
    try {
        await ApiInstance().put('module', {
            login: module.login,
            module: module.name
        });
        return {
            type: ActionTypeNames.ADD_MODULE_SUCCESS,
            module
        }
    } catch (e) {
        return {
            type: ActionTypeNames.ADD_MODULE_FAILED
        };
    }
}

export const DeleteModule: (_: any) => any = async (
    id
): Promise<DeleteModuleSuccess | DeleteModuleFailed> => {
    try {
        await ApiInstance().delete(`module/${id}`);
        return {
            type: ActionTypeNames.DELETE_MODULE_SUCCESS,
            id
        }
    } catch (e) {
        return {
            type: ActionTypeNames.DELETE_MODULE_FAILED
        };
    }
}


export const FetchCurrentModule: (
    login: string,
    name: string
) => any = async (
    login,
    name
): Promise<FetchCurrentModuleSuccess | FetchCurrentModuleFailed> => {
    try {
        const module = (await ApiInstance().get(`module/${login}/${name}`)).data;
        return {
            type: ActionTypeNames.FETCH_CURRENT_MODULE_SUCCESS,
            current_module: module
        }
    } catch (e) {
        return {
            type: ActionTypeNames.FETCH_CURRENT_MODULE_FAILED,
            error: true
        };
    }
}
export const SearchModules: (
    params: string
) => any = async (
    params
): Promise<SearchModuleSuccess | SearchModuleFailed> => {
    try {
        const modules = (await ApiInstance().get(`search/${params}`)).data;
        return {
            type: ActionTypeNames.SEARCH_MODULES_SUCCESS,
            search_modules: modules
        }
    } catch (e) {
        return {
            type: ActionTypeNames.SEARCH_MODULES_FAILED
        };
    }
}