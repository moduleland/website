
import {Repo} from "./MyselfTypes";
import {PrivateModule} from "./ModuleTypes";

export class DefaultState {
    users: Array<User> = [];
    current_user: User | null = null;
}

export interface User {
    login: string
    name: string
    avatar_url: string
    url: string
    website_url: string

    repos: Repo[]
    modules: PrivateModule[]
}
