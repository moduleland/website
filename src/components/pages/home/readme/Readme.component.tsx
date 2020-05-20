import React, {useEffect, useState} from "react";
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import style from './Readme.module.scss';
import {CodeBlock} from "../../../common/markdown/codeBlock/CodeBlock.component";
import {InlineCode} from "../../../common/markdown/inlineCode/InlineCode.component";

type props = {
    url?: string;
}

export const Readme: React.FunctionComponent<props> = ({
   url
}) =>  {

    const [readme, setReadme] = useState<string>("");

    useEffect(() => {
        (async () => {
            try {
                const home = (await axios.get(url || process.env.REACT_APP_HOME_RD || "")).data;
                setReadme(home)
            } catch (e) {
                console.info(e);
            }
        })();
    }, [url, setReadme]);


    return (
        <ReactMarkdown
            className={style.content}
            source={readme}
            renderers={{
                code: CodeBlock,
                inlineCode: InlineCode
            }}
        />
    )
}
