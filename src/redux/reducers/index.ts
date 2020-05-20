
import { combineReducers } from "redux";
import { DefaultState as MyselfDefaultState } from "../types/MyselfTypes";
import { DefaultState as ModuleDefaultState } from "../types/ModuleTypes";
import { DefaultState as UserDefaultState } from "../types/UserTypes";
import { Reduce as MyselfReduce } from "./MyselfReducer";
import { Reduce as ModuleReducer } from "./ModulesReducer";
import { Reduce as UserReducer } from "./UserReducer";

export default combineReducers({
    myself: MyselfReduce,
    modules: ModuleReducer,
    users: UserReducer
});

export interface DefaultState {
    myself: MyselfDefaultState,
    modules: ModuleDefaultState,
    users: UserDefaultState
}
