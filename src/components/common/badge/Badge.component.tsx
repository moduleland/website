import React from "react";

import style from './Badge.module.scss';

type props = {
    small?: any
}

export const Badge: React.FunctionComponent<props> = ({
    small,
    children
}) => {

    console.log(small)
    return <a className={`${style.label} ${small ? style.small : ''}`}>{children}</a>;
}
