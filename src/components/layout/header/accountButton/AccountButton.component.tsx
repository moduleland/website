
import React from "react";
import Icon from "@mdi/react";
import {mdiGithub} from "@mdi/js";
import style from './AccountButton.module.scss'
import {Button} from "../../../common/button/Button.component";
import {useSelector} from "react-redux";
import {DefaultState} from "../../../../redux/reducers";
import { Link } from 'react-router-dom';
import {User} from "../../../../redux/types/UserTypes";

export const AccountButton = () => {
    const user = useSelector<DefaultState, User | undefined>(u => u.myself.myself);
    const logged = useSelector<DefaultState, boolean | undefined>(u => u.myself.logged);
    const onClick = () =>
        window.open(`${process.env.REACT_APP_API_URL}login`, '_self')

    return (
        user && logged
            ? (
                <Link
                    className={style.menu}
                    to='/account'
                >
                    <div className={style.login}>
                        {user.login}
                    </div>
                    <img
                        className={style.avatar}
                        alt={user.login}
                        src={user.avatar_url}
                    />
                </Link>
            )
            : (
                <Button
                    inline
                    className={style.button}
                    onClick={onClick}
                >
                    <Icon
                        path={mdiGithub}
                        size={1}
                    />
                    <div>Log In</div>
                </Button>
            )
    )
}
