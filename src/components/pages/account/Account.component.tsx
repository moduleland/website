import React, {useState} from "react";
import {Button} from "../../common/button/Button.component";
import {
    mdiCached,
    mdiGoogleDownasaur,
    mdiPlus,
} from "@mdi/js";
import {Redirect} from 'react-router-dom';
import Icon from "@mdi/react";
import style from './Account.module.scss';
import {Option, Selector} from "../../common/selector/Selector.component";
import {ModuleItem} from "./moduleItem/ModuleItem.component";
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "../../../redux/reducers";
import {AddModule, DeleteModule} from "../../../redux/dispatchers/ModulesDispatcher";
import {MapRepoToOption} from "./Account.mapper";
import {UpdateMyself} from "../../../redux/dispatchers/MyselfDispatcher";
import {User} from "../../../redux/types/UserTypes";
import {Module} from "../../../redux/types/ModuleTypes";

type props = {
    match: any;
}

export const Account: React.FunctionComponent<props> = ({ match }) => {
    const dispatch = useDispatch();
    const user = useSelector<DefaultState, User | undefined>(u => u.myself.myself);
    const logged = useSelector<DefaultState, boolean | undefined>(u => u.myself.logged);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const userModules = useSelector<DefaultState, Module[] | undefined>(u => u.myself.myself?.modules) || [];
    const repoOptions = user?.repos
        .map(MapRepoToOption)
        .filter(o => !userModules.some(mo => mo.id === o.value.id));

    const onAddSelectedOption = async () => {
        if(!selectedOption) return;
        if(!user) return;
        const module = user?.repos.find(r =>
            r.id === selectedOption.value.id
        );
        dispatch(await AddModule(module));
        dispatch(await UpdateMyself({
            ...user,
            modules: [
                ...user?.modules || [],
                module
            ]
        }));
        setSelectedOption(null);
    }

    const onModuleDelete = async (
        module: Module
    ) => {
        if(!user) return;
        dispatch(await DeleteModule(module.id));
        dispatch(await UpdateMyself({
            ...user,
            modules: user?.modules.filter(_module => _module.id !== module.id)
        }));
    }

    return (
        <>
            { logged === false && (<Redirect to='/'/>) }
            {
                logged && (
                    <div className={style.container}>
                        <div className={style.modulesContainer}>
                            <div className={style.selectorContainer}>
                                <Selector
                                    options={repoOptions || []}
                                    onChange={setSelectedOption}
                                    selected={selectedOption}
                                />
                                <Button
                                    title='Add module'
                                    onClick={onAddSelectedOption}
                                >
                                    <Icon
                                        path={mdiPlus}
                                        size={1}
                                    />
                                </Button>
                                <div
                                    className={style.refresh}
                                    title={'refresh modules'}
                                >
                                    <Icon
                                        path={mdiCached}
                                        size={1}
                                    />
                                </div>
                            </div>
                            <div className={style.listContainer}>
                                {userModules.length === 0 && (
                                    <label>
                                        Nothing here...
                                        <Icon
                                            size={1}
                                            path={mdiGoogleDownasaur}
                                        /> yet!
                                    </label>
                                )}
                                {userModules.map(module => (
                                    <ModuleItem
                                        key={module.id}
                                        module={module}
                                        onClickDelete={() => onModuleDelete(module)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={style.userContainer}>
                            <a
                                href={`${process.env.REACT_APP_API_URL}logout`}
                                className={style.clickable}
                            >logout</a>
                        </div>
                    </div>
                )
            }
        </>
    )
}
