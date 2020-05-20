import {
    ActionTypes,
    ActionTypeNames
} from "../actions";
import {DefaultState} from "../types/ModuleTypes";
import {produce} from 'immer'

export const Reduce = (
    state: DefaultState = new DefaultState(),
    action: ActionTypes
) => {
    switch (action.type) {
        case ActionTypeNames.ADD_MODULES_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.modules = [
                    ...copyState.modules,
                    ...action.modules
                ]
            });
        case ActionTypeNames.ADD_MODULE_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.modules = [
                    ...copyState.modules,
                    action.module
                ];
            });
        case ActionTypeNames.FETCH_TOP_MODULES_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.last_modules = action.last_modules;
            });
        case ActionTypeNames.DELETE_MODULE_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.modules = copyState.modules
                    .filter(m => m.id !== action.id);
            });
        case ActionTypeNames.FETCH_CURRENT_MODULE_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.current_module = action.current_module;
            });
        case ActionTypeNames.SEARCH_MODULES_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.search_modules = action.search_modules;
            });
    }
    return state;
}
