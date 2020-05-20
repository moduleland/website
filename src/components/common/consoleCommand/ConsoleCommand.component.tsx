import React, {useState} from "react";
import style from "./ConsoleCommand.module.scss";
import Icon from "@mdi/react";
import {mdiConsoleLine} from "@mdi/js";

type props = {
    username: string,
    moduleName: string;
    className?: string;
}

export const ConsoleCommand: React.FunctionComponent<props> =
({
     username,
     moduleName,
     className
}) => {
    const [textVisible, setTextVisible] = useState<boolean>(false);
    const commandText = `land add ${username}/${moduleName}`;
    const onCopyToClipboard = async () => {
        setTextVisible(true);
        await navigator.clipboard.writeText(commandText);
        setTimeout(() => {
            setTextVisible(false)
        }, 2000)
    }
    return (
            <div
                className={`${style.consoleCommand} ${className || ''}`}
                onClick={onCopyToClipboard}
            >
                <Icon
                    path={mdiConsoleLine}
                    size={0.7}
                />
                <div className={`${style.content} ${textVisible ? style.copied : ''}`}>
                    <div>{commandText}</div>
                    <div>now on your clipboard</div>
                </div>
            </div>
        )
    }
