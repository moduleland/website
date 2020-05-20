import React from "react";
import {Helmet as HelmetMeta} from "react-helmet";

type props = {
    title?: string;
    description?: string;
    image?:string
}

const baseTitle = "module.land - ";
const defaultTitle = `${baseTitle}deno module manager`;
const defaultDesc = "deno module manager for public and private packages.";
const defaultImage = "https://module.land/icon.png";

export const Helmet: React.FunctionComponent<props> = ({
    title,
    description,
    image
}) => {

    const formatTitle = title ? `${baseTitle}${title}` : defaultTitle;
    const formatDesc = description || defaultDesc;
    const formatImage = image || defaultImage;

    return (
        <HelmetMeta>
            <title>{formatTitle}</title>
            <meta name={'description'} content={formatDesc} />

            <meta property={"og:title"} content={formatTitle} />
            <meta property={"og:description"} content={formatDesc} />
            <meta property={"og:image"} content={formatImage} />
        </HelmetMeta>
    )
}
