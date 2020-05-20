import {User} from "./UserTypes";
import {Module} from "./ModuleTypes";

export class DefaultState {
    myself?: User;
    logged?: boolean;
}

export type Repo = Module & {

}
