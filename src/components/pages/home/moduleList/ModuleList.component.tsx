import React from "react";
import {Module} from "../../../../redux/types/ModuleTypes";
import {ModuleLabel} from "../../../common/moduleLabel/ModuleLabel.component";
import {Link} from "react-router-dom";
import style from './ModuleList.module.scss';

type props = {
    modules: Module[]
}

//https://raw.githubusercontent.com/denoland/deno_website2/master/src/database.json
export const ModuleList: React.FunctionComponent<props> =
({
    modules
}) => (
    <div className={style.moduleList}>
        {modules.map((module) => (
            <Link
                key={module.id}
                to={`/~${module.login}/${module.name}`}
                className={style.moduleItem}
            >
                <ModuleLabel
                    showStatus={false}
                    language={module.primary_language}
                >
                    <label className={style.title}>
                        {`${module.login}/${module.name}`}
                    </label>
                </ModuleLabel>
                {
                    module.description &&
                    <div className={style.description}>
                        {module.description}
                    </div>
                }
            </Link>
        ))}
    </div>
);
