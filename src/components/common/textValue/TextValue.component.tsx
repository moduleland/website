import React from "react";
import style from './TextValue.module.scss'

type props = {
    title: string;
    className?: string;
}

export const TextValue: React.FunctionComponent<props> =
({
     title,
     children,
     className
}) => (
    <div className={`${style.content} ${className || ''}`}>
        <div className={style.title}>{title}</div>
        <div>{children}</div>
    </div>
);
