import React, {useState} from "react";
import style from './SearchInput.module.scss'
import { mdiMagnify } from '@mdi/js';
import Icon from "@mdi/react";
import {Button} from "../../../common/button/Button.component";

type props = {
    onSearch?: (value: string) => any
}

export const SearchInput: React.FunctionComponent<props> = ({
    onSearch
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const _onSearch = (e: any) => {
        e.preventDefault();
        if(onSearch) onSearch(inputValue);
    }
    const onInputChange = (value: string) => {
        setInputValue(value);
    }
    return (
        <form
            onSubmit={_onSearch}
            className={style.search}
        >
            <Icon
                className={style.icon}
                path={mdiMagnify}
                size={1}
            />
            <input
                onChange={input => onInputChange(input.target.value)}
                placeholder='search module'
            />
            <Button>Search</Button>
        </form>
    )
}
