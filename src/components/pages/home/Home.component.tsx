
import React from 'react';
import {Readme} from "./readme/Readme.component";
import {ModuleList} from "./moduleList/ModuleList.component";
import style from './Home.module.scss';
import {useSelector} from "react-redux";
import {DefaultState} from "../../../redux/reducers";
import {Module} from "../../../redux/types/ModuleTypes";

export const Home: React.FunctionComponent = () => {
    const topModules = useSelector<DefaultState, Module[]>(u => u.modules.last_modules);

    return (
        <section className={style.content}>
            <Readme />
            <div className={style.rightSide}>
                <div className={style.title}>Latest modules</div>
                <ModuleList
                    modules={topModules}
                />
            </div>
        </section>
    );
}

export default Home;
