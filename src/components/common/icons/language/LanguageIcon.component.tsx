import React from "react";
import Icon from "@mdi/react";
import style from './LanguageIcon.module.scss';
import {
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiSquareOffOutline
} from "@mdi/js";

const languageIcons: any = {
    'javascript': mdiLanguageJavascript,
    'typescript': mdiLanguageTypescript,
    'rust': mdiSquareOffOutline,
    'webassembly': mdiSquareOffOutline
}

type props = {
    className?: string;
    language?: string
}
export const LanguageIcon: React.FunctionComponent<props> =
    ({
         className,
         language= ''
    }) => (
        <Icon
            className={`${className} ${style.icon} ${(style as any)[language?.toLowerCase()]}`}
            title={language}
            path={languageIcons[language?.toLowerCase()]}
            size={1}
        />
    );
