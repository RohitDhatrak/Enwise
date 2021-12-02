import { ReducerInitialStateTypes, User, Action } from "../types/types";

export function reducer(
    state: ReducerInitialStateTypes,
    action: Action
): ReducerInitialStateTypes {
    switch (action.type) {
        case "CLEAR_USER_SESSION":
            return {
                ...state,
                user: {} as User,
                playlists: [],
                likes: [],
                watchLater: [],
                history: [],
            };
        case "SET_USER_SESSION":
            const user = action.payload.user;
            localStorage.setItem(
                "user",
                JSON.stringify({ id: user.id, jwt: user.jwt })
            );
            return { ...state, user };
        default:
            return state;
    }
}

export const initialState: ReducerInitialStateTypes = {
    videos: [],
    user: {} as User,
    playlists: [],
    likes: [],
    watchLater: [],
    history: [],
};
