import React, {useEffect, useState} from "react";
import {ModuleLabel} from "../../../common/moduleLabel/ModuleLabel.component";
import {Link} from "react-router-dom";
import Icon from "@mdi/react";
import {mdiChevronDown, mdiChevronUp, mdiLockClock, mdiTrashCan} from "@mdi/js";
import style from './ModuleItem.module.scss'
import {GenerateModuleCode} from "../../../../redux/dispatchers/MyselfDispatcher";
import {PrivateModule} from "../../../../redux/types/ModuleTypes";
import {useDispatch} from "react-redux";
import {GetMinutesSecondsTime} from "../../../../utils/CommonUtils";
import {ConsoleCommand} from "../../../common/consoleCommand/ConsoleCommand.component";

type props = {
    className?: string;
    module: PrivateModule
    onClickDelete?: () => void;
}
export const ModuleItem: React.FunctionComponent<props> =
({
     className,
     module,
     onClickDelete
}) => {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [codeTime, setCodeTime] = useState<number>(0);

    const onClickOpen = () => setOpen(!isOpen);
    const onGenerateNewCode = async () => {
        dispatch(await GenerateModuleCode(module.id));
    }

    const moduleName = `${module.login}/${module.name}`;

    useEffect(() => {

        const interval = setInterval(() => {
            const remain_seconds = Math.trunc(((module.code?.expire_at || 0) - Date.now()) / 1000);
            if(!module.code || 0 > remain_seconds) return;
            setCodeTime(remain_seconds);
        }, 500);
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div className={`${className || ''} ${style.item}`}>
            <div className={style.tab}>
                <Link
                    className={style.info}
                    to={module.is_private ? '#' : `/~${moduleName}`}
                >
                    <ModuleLabel
                        isPrivate={module.is_private}
                        language={module.primary_language}
                    >
                        <label className={style.title}>
                            {moduleName}
                        </label>
                    </ModuleLabel>
                </Link>
                <div
                    className={style.open}
                    onClick={onClickOpen}
                >
                    <Icon
                        className={style.icon}
                        path={isOpen ? mdiChevronUp : mdiChevronDown}
                        size={1}
                    />
                </div>
            </div>
            <div
                style={{
                    display: isOpen ? '' : 'none'
                }}
                className={style.content}
            >
                <div>
                    {
                        module.is_private && (
                            <>
                                <div
                                    onClick={onGenerateNewCode}
                                    className={style.temporalCode}
                                >
                                    <Icon
                                        path={mdiLockClock}
                                        size={1}
                                    />
                                    <label
                                        className={style.title}
                                    >generate code</label>
                                </div>
                                {
                                    module.code && (
                                        <div
                                            className={style.temporalCodeContent}
                                        >
                                            <div className={style.expireOn}>
                                                <label
                                                    className={`${style.time} ${0 >= codeTime ? style.expired : ''}`}
                                                >
                                                    {0 >= codeTime ? 'expired' : GetMinutesSecondsTime(codeTime)}
                                                </label>
                                            </div>
                                            <ConsoleCommand
                                                className={style.consoleCommand}
                                                username={module.login}
                                                moduleName={`${module.name} ${module.code.code}`}
                                            />
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </div>
                <div
                    onClick={onClickDelete}
                    className={style.deleteButton}
                >
                    <label>delete</label>
                    <Icon path={mdiTrashCan} size={1}/>
                </div>
            </div>
        </div>
    )
};
