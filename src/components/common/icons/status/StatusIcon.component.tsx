import React from "react";
import Icon from "@mdi/react";
import {mdiEarth, mdiLock} from "@mdi/js";

type props = {
    className?: string;
    isPrivate?: boolean
}
export const StatusIcon: React.FunctionComponent<props> =
    ({
         className,
         isPrivate
    }) => (
        <Icon
            className={className}
            title={isPrivate ? 'private' : 'public'}
            path={isPrivate? mdiLock : mdiEarth}
            size={1}
        />
    );
