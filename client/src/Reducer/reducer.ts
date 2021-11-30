import { ReducerInitialStateTypes, User, Action } from "../types/types";

export function reducer(
    state: ReducerInitialStateTypes,
    action: Action
): ReducerInitialStateTypes {
    switch (action.type) {
        case "RESET":
            return {
                ...state,
                user: {} as User,
                playlists: [],
                likes: [],
                watchLater: [],
                history: [],
            };
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
