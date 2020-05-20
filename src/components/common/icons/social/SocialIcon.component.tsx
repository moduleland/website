import React from "react";
import Icon from "@mdi/react";

type props = {
    path: string;
    url?: string;
    className?: string;
    title?: string;
}
export const SocialIcon: React.FunctionComponent<props> = ({
   className,
   url,
   title,
   path
}) => (
    <a href={url} target={"_blank"} rel="noopener noreferrer">
        <Icon
            className={className}
            title={title}
            path={path}
            size={1.5}
        />
    </a>
);
