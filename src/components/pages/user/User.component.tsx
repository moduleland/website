
import React, {useEffect, useState} from 'react';
import style from './User.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "../../../redux/reducers";
import {User as TUser} from "../../../redux/types/UserTypes";
import {FetchCurrentUser} from "../../../redux/dispatchers/UsersDispatcher";
import {Link, Redirect} from "react-router-dom";
import {ModuleLabel} from "../../common/moduleLabel/ModuleLabel.component";
import {mdiGithub} from "@mdi/js";
import Icon from "@mdi/react";
import {Helmet} from "../../Helmet.component";

type props = {
    match: any;
}

export const User: React.FunctionComponent<props> = ({ match }) => {
    const dispatch = useDispatch();
    const user = useSelector<DefaultState, TUser | null>(u => u.users.current_user);
    const [notFound, setNotFound] = useState(false);
    const [userData, setUserData] = useState<TUser | null>(null);

    const modules = user?.modules.filter(m => !m.is_private) || [];

    useEffect(() => {
        (async () => {
            const toDispatch = await FetchCurrentUser(match.params[0])
            if(toDispatch.error)
                setNotFound(true);
            dispatch(toDispatch)
        })();
    }, [ match, dispatch ]);

    useEffect(() => {
        if(user)
            setUserData(user);
    }, [user]);

    return (
        <div className={style.content}>
            <Helmet
                title={userData?.login}
                image={userData?.avatar_url}
            />
            {notFound && <Redirect  to='/'/>}
            <div className={style.user}>
                <img className={style.avatar} src={userData?.avatar_url} alt={"profile"}/>
                <div className={style.name}>{userData?.name}</div>
                <div className={style.login}>{`@${userData?.login}`}</div>
                {
                    userData?.website_url &&
                    <a href={userData?.website_url} target={"_blank"} rel="noopener noreferrer">{userData?.website_url}</a>
                }
                {
                    userData?.url && (
                        <a href={userData?.url} target={"_blank"} rel="noopener noreferrer">
                            <Icon
                                color={"#c7c7c7"}
                                className={style.github}
                                title={"Github account"}
                                path={mdiGithub}
                                size={1.5}
                            />
                        </a>
                    )

                }
            </div>
            <div className={style.rightSide}>
                <div className={style.title}>{`${userData?.login}´s modules`}</div>
                {userData?.modules.length === 0 && (
                    <label>
                        {`${userData?.login} has not added any modules yet...`}
                    </label>
                )}

                <div className={style.moduleList}>
                    {modules.map((module) => (
                        <Link
                            key={`${module.login}/${module.name}`}
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
            </div>
        </div>
    );
}

export default User;
