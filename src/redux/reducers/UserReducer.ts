import {ActionTypeNames, ActionTypes} from "../actions";
import {DefaultState} from "../types/UserTypes";
import {produce} from 'immer'

export const Reduce = (
    state: DefaultState = new DefaultState(),
    action: ActionTypes
) => {
    switch (action.type) {

        case ActionTypeNames.ADD_USERS_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.users = [
                    ...copyState.users,
                    ...action.users
                ]
            });

        case ActionTypeNames.FETCH_CURRENT_USER_SUCCESS:
            return produce(state, (copyState: DefaultState) => {
                copyState.current_user = action.current_user;
            });
    }
    return state;
}
