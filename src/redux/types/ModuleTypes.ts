
export class DefaultState {
    modules: Array<Module> = [];
    last_modules: Array<Module> = [];
    current_module: Module | null = null;
    search_modules: Module[] = [];
}

export type Code = {
    code: string;
    expire_at: number;
}

export type Module = {
    id: string;
    login: string;
    name: string;
    description: string;
    is_private: boolean;
    license: string;
    created_at: Date;
    updated_at: Date;
    primary_language: string;
    branch_name: string;
    release?: {
        tag_name: string;
        is_prerelease: boolean
    },
    readme?: string
}

export type PrivateModule = Module & {
    code?: Code;
}
