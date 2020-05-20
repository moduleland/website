import {ActionTypeNames} from "../actions";
import {
    FetchMyselfFailed, FetchMyselfModuleCodeSuccess,
    FetchMyselfSuccess, UpdateMyselfFailed
} from "../actions/MyselfActions";
import {ApiInstance} from "../../utils/ApiUtils";
import {Code} from "../types/ModuleTypes";

export const FetchMyself = async (

): Promise<FetchMyselfSuccess | FetchMyselfFailed> => {
    try {
        const user = (await ApiInstance().get('user')).data;
        return {
            type: ActionTypeNames.FETCH_MYSELF_SUCCESS,
            myself: {
                ...user,
                repos: []
            }
        }
    } catch (e) {
        return { type: ActionTypeNames.FETCH_MYSELF_FAILED };
    }
}

export const FetchMyselfRepos = async (

) => {
    try {
        const repos = (await ApiInstance().get('repos')).data
            .sort((a: any, b: any) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
        return {
            type: ActionTypeNames.UPDATE_MYSELF_SUCCESS,
            myself: {
                repos: repos
            }
        }
    } catch (e) {
        return { type: ActionTypeNames.UPDATE_MYSELF_FAILED };
    }
}

export const UpdateMyself: (
    myself: any
) => any = async (
    myself
) => ({
    type: ActionTypeNames.UPDATE_MYSELF_SUCCESS,
    myself
});

export const GenerateModuleCode: (
    module_id: string
) => any = async (
    module_id
): Promise<FetchMyselfModuleCodeSuccess | UpdateMyselfFailed> => {
    try {
        const code: Code = (await ApiInstance().get(`module/code/${module_id}`)).data;
        return {
            type: ActionTypeNames.FETCH_MYSELF_MODULE_CODE_SUCCESS,
            module_id,
            code
        }
    } catch (e) {
        return { type: ActionTypeNames.UPDATE_MYSELF_FAILED };
    }
}
