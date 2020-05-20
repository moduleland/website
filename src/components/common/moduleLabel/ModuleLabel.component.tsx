import React from "react";
import {StatusIcon} from "../icons/status/StatusIcon.component";
import {LanguageIcon} from "../icons/language/LanguageIcon.component";
import style from './ModuleLabel.module.scss'

type props = {
    className?: string;
    showStatus?: boolean;
    isPrivate?: boolean;
    language?: string;
}
export const ModuleLabel: React.FunctionComponent<props> =
    ({
         className,
         showStatus = true,
         isPrivate,
         language,
         children
     }) => (
        <div
            className={`${className} ${style.container} ${showStatus ? style.containerExtended : ''}`}
        >
            {showStatus && <StatusIcon isPrivate={isPrivate} />}
            <LanguageIcon language={language} />
            {children}
        </div>
    );
