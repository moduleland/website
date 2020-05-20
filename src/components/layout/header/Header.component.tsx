import React, {useEffect, useState} from "react";
import style from "./Header.module.scss";
import {SearchInput} from "./searchInput/SearchInput.component";
import {AccountButton} from "./accountButton/AccountButton.component";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

export const Header: React.FunctionComponent = () => {
    const [dinoFlip, setDinoFlip] = useState<boolean>(false);
    const [searchContent, setSearchContent] = useState<string | null>();

    const onDinoClick = () => {
        setDinoFlip(!dinoFlip);
    }
    const onSearch = (search: string) => {
        setSearchContent(search)
    }

    useEffect(() => {
        if(searchContent)
            setSearchContent(null)
    }, [searchContent])

    return (
        <header>
            {searchContent && <Redirect to={`/search/${searchContent}`} />}
            <Link className={style.title} to='/'>
                <div className={style.dino} onClick={onDinoClick}>
                    <img style={{ transform: `scaleX(${dinoFlip ? -1 : 1})` }} alt='mr deno' src='../mrdeno.svg'/>
                </div>
            </Link>
            <div className={style.navigator}>
                <div className={style.searchBar}>
                    <SearchInput onSearch={onSearch} />
                    <AccountButton />
                </div>
            </div>
        </header>
    )
}
