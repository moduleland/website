import React from "react";
import style from "./Footer.module.scss";
import {mdiDiscord, mdiGithub, mdiTwitter} from "@mdi/js";
import {SocialIcon} from "../../common/icons/social/SocialIcon.component";

export const Footer: React.FunctionComponent = () => {

    return (
        <footer className={style.footer}>
            <label className={style.upper}>
                From devs to devs
            </label>
            <div className={style.socialRow}>
                <SocialIcon
                    className={style.icon}
                    path={mdiGithub}
                    url={"https://github.com/moduleland"} />

                <SocialIcon
                    className={style.icon}
                    path={mdiDiscord}
                    url={"https://discord.com/invite/2eqenPy"} />

                <SocialIcon
                    className={style.icon}
                    path={mdiTwitter}
                    url={"https://twitter.com/module_land"} />
            </div>
            <label>
                © {new Date().getFullYear()} module.land
            </label>
        </footer>
    )
}
