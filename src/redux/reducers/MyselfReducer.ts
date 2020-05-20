import {ActionTypeNames, ActionTypes} from "../actions";
import {DefaultState} from "../types/MyselfTypes";
import {produce} from 'immer'

export const Reduce = (
    state: DefaultState = new DefaultState(),
    action: ActionTypes
) => {
    switch (action.type) {
        case ActionTypeNames.FETCH_MYSELF_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.myself = {
                    ...action.myself
                };
                copyState.logged = true;
            });
        case ActionTypeNames.UPDATE_MYSELF_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.myself = {
                    ...copyState.myself,
                    ...action.myself
                }
            });
        case ActionTypeNames.FETCH_MYSELF_MODULE_CODE_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                if(!copyState.myself) return;
                copyState.myself.modules =
                    copyState.myself?.modules
                        .map(module => module.id === action.module_id ? {
                            ...module,
                            code: action.code
                        } : module)
            });
        case ActionTypeNames.FETCH_CURRENT_USER_FAILED:
            return produce(state, (copyState: DefaultState) => {
                copyState.logged = false;
            });
    }
    return state;
}
