
import React, {useEffect, useState} from 'react';
import style from './Module.module.scss';
import {TextValue} from "../../common/textValue/TextValue.component";
import {ConsoleCommand} from "../../common/consoleCommand/ConsoleCommand.component";
import {useDispatch, useSelector} from "react-redux";
import {FetchCurrentModule} from "../../../redux/dispatchers/ModulesDispatcher";
import {DefaultState} from "../../../redux/reducers";
import {Module as TModule} from "../../../redux/types/ModuleTypes";
import {Link, Redirect} from 'react-router-dom'
import {GetDateFormat, GetDiffTime} from "../../../utils/CommonUtils";
import {LanguageIcon} from "../../common/icons/language/LanguageIcon.component";
import Icon from "@mdi/react";
import {mdiGithub} from "@mdi/js";
import {CodeBlock} from "../../common/markdown/codeBlock/CodeBlock.component";
import {InlineCode} from "../../common/markdown/inlineCode/InlineCode.component";
import ReactMarkdown from "react-markdown";
import {Helmet} from "../../Helmet.component";

type props = {
    match: any;
}

const baseGithub = "https://github.com/";

export const Module: React.FunctionComponent<props> = ({ match }) => {
    const dispatch = useDispatch();
    const module = useSelector<DefaultState, TModule | null>(u => u.modules.current_module);
    const [notFound, setNotFound] = useState(false);
    const [moduleData, setModuleData] = useState<any>({});

    useEffect(() => {
        (async () => {
            const toDispatch = await FetchCurrentModule(match.params[0], match.params[1])
            if(toDispatch.error)
                setNotFound(true);
            dispatch(toDispatch)
        })();
    }, [ match, dispatch ]);

    useEffect(() => {
        if(module)
            setModuleData(module);
    }, [module])

    return (
    <div className={style.gridContainer}>
        <Helmet
            title={`${moduleData?.login}/${moduleData?.name}`}
            description={moduleData?.description}
        />
        {notFound && <Redirect  to='/'/>}
        <div className={style.information}>
            <div className={style.title}>
                {moduleData?.primary_language &&
                    <LanguageIcon language={moduleData?.primary_language}/>
                }
                <label>{moduleData?.name}</label>
            </div>
            <ConsoleCommand
                className={style.row}
                username={moduleData?.login}
                moduleName={moduleData?.name} />
            {moduleData.description && (
                <TextValue
                    className={style.description}
                    title='Description'
                >{moduleData?.description}</TextValue>
            )}
            <TextValue
                className={style.middleRow}
                title='Version'
            >{moduleData?.release?.tag_name || '-'}</TextValue>
            <TextValue
                className={style.middleRow}
                title='License'
            >{moduleData?.license || 'None'}</TextValue>
            <TextValue
                className={style.middleRow}
                title='Created at'
            >{GetDateFormat(moduleData?.created_at, 'DD-MM-YYYY')}</TextValue>
            <TextValue
                className={style.middleRow}
                title='Last update'
            >{`${GetDiffTime(moduleData?.updated_at)} days ago`}</TextValue>
            <TextValue
                className={style.row}
                title='Owner'
            >
                <Link
                    to={`/~${moduleData?.login}`}
                >{`~${moduleData?.login}`}</Link>
            </TextValue>
            {
                moduleData.name && (
                    <a
                        href={`${baseGithub}${moduleData?.login}/${moduleData?.name}`}
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <Icon
                            color={"#c7c7c7"}
                            title='module on github'
                            path={mdiGithub}
                            size={1}
                        />
                    </a>
                )
            }
        </div>
        <div>
            {moduleData.readme && (
                <ReactMarkdown
                    source={moduleData.readme}
                    skipHtml={true}
                    renderers={{
                        code: CodeBlock,
                        inlineCode: InlineCode
                    }}
                />
            )}
        </div>
    </div>
)}

export default Module;
