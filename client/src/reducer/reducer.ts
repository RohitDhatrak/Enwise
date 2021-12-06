import { videos } from "../data/data";
import { ReducerInitialStateTypes, User, Action } from "../types/types";

export function reducer(
    state: ReducerInitialStateTypes,
    action: Action
): ReducerInitialStateTypes {
    switch (action.type) {
        case "DELETE_USER_SESSION":
            return {
                ...state,
                user: {} as User,
                playlists: [],
                likes: [],
                watchLater: [],
                history: [],
            };
        case "SAVE_USER_SESSION":
            let user = action.payload.user;
            localStorage.setItem(
                "user",
                JSON.stringify({ id: user.id, jwt: user.jwt })
            );
            return { ...state, user };
        case "SAVE_USER_DATA":
            return {
                ...state,
                playlists: action.payload.playlists,
                likes: action.payload.likes,
                watchLater: action.payload.watchLater,
                history: action.payload.history,
            };
        case "SAVE_HISTORY":
            return {
                ...state,
                history: action.payload.history,
            };
        case "SAVE_WATCHLATER":
            return {
                ...state,
                watchLater: action.payload.watchLater,
            };
        case "SAVE_LIKES":
            return {
                ...state,
                likes: action.payload.likes,
            };
        case "SAVE_PLAYLISTS":
            return {
                ...state,
                playlists: action.payload.playlists,
            };
        case "SAVE_VIDEOS":
            const videos = action.payload.videos;
            return { ...state, videos };
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
