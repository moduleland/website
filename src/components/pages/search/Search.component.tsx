import React, {useEffect} from "react";
import style from './Search.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ModuleLabel} from "../../common/moduleLabel/ModuleLabel.component";
import {SearchModules} from "../../../redux/dispatchers/ModulesDispatcher";
import {DefaultState} from "../../../redux/reducers";
import {Module as TModule} from "../../../redux/types/ModuleTypes";
import Icon from "@mdi/react";
import {mdiGoogleDownasaur} from "@mdi/js";

type props = {
    match: any;
}

export const Search: React.FunctionComponent<props> = ({ match }) => {
    const dispatch = useDispatch();
    const modules = useSelector<DefaultState, TModule[]>(u => u.modules.search_modules);

    useEffect(() => {
        (async () => {
            dispatch(await SearchModules(match.params.params))
        })();
    }, [ match, dispatch ]);

    return (
        <div className={style.moduleList}>
            {
                modules.length === 0 &&
                <label>
                    Nothing here...
                    <Icon
                        size={1}
                        path={mdiGoogleDownasaur}
                    /> yet!
                </label>
            }
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
                        <div className={style.title}>
                            {`${module.login}/${module.name}`}
                        </div>
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
    )
}
