import {Repo} from "../../../redux/types/MyselfTypes";
import {Option} from "../../common/selector/Selector.component";

export const MapRepoToOption = (repo: Repo): Option => ({
    label: `${repo.login}/${repo.name}`,
    value: {
        id: repo.id,
        login: repo.login,
        name: repo.name,
        version: repo.release ? repo.release.tag_name : null,
        language: repo.primary_language?.toLowerCase() || '',
        is_private: repo.is_private
    }
});
