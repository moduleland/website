import React from "react";
import style from './InlineCode.module.scss'

type props = {
    value: string;
}

export const InlineCode: React.FunctionComponent<props> = ({
  value
}) => <label className={style.inline}>{value}</label>
