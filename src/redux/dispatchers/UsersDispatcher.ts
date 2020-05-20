import {
    AddUsersSuccess,
    FetchCurrentUserFailed,
    FetchCurrentUserSuccess,
} from "../actions/UsersActions";
import {ActionTypeNames} from "../actions";
import {ApiInstance} from "../../utils/ApiUtils";

export const AddUsers: (_: any) => any = (
    users
): AddUsersSuccess => ({
    type: ActionTypeNames.ADD_USERS_SUCCESS,
    users
});

export const FetchCurrentUser: (
    login: string
) => any = async (
    login,
): Promise<FetchCurrentUserSuccess | FetchCurrentUserFailed> => {
    try {
        const user = (await ApiInstance().get(`user/${login}`)).data;
        return {
            type: ActionTypeNames.FETCH_CURRENT_USER_SUCCESS,
            current_user: user
        }
    } catch (e) {
        return {
            type: ActionTypeNames.FETCH_CURRENT_USER_FAILED,
            error: true
        };
    }
}