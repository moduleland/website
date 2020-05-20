import React from "react";
import style from './Button.module.scss';

type props = {
    onClick?: (e: any) => void;
    inline?: any;
    small?: boolean;
    className?: string;
    title?: string;
}
export const Button: React.FunctionComponent<props> =
    ({
        onClick,
        children,
        small,
        inline,
        className,
        title
    }) =>
    <button
        title={title || ''}
        className={`${className || ''} ${style.button} ${small ? style.buttonSmall : ''} ${inline !== undefined ? style.buttonInline : ''}`}
        onClick={onClick}
    >{children}</button>
