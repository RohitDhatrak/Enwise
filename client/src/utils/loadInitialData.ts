import { getVideos } from "../services/getVideos";
import { User } from "../types/types";
import {
    getPlaylists,
    getLikedVideos,
    getHistory,
    getWatchLater,
    getUserData,
} from "../services/getUserData";

export async function loadInitialData(
    user: User,
    dispatch: Function,
    setIsLoading: Function
) {
    try {
        const videos = await getVideos();
        dispatch({
            type: "SAVE_VIDEOS",
            payload: { videos },
        });
        setIsLoading(false);

        if (user.id) {
            const userData = await getUserData(user.id);
            dispatch({
                type: "SAVE_USER_SESSION",
                payload: { user: { ...user, ...userData } },
            });
            const playlists = await getPlaylists(user.id);
            const likes = await getLikedVideos(user.id);
            const watchLater = await getWatchLater(user.id);
            const history = await getHistory(user.id);
            dispatch({
                type: "SAVE_USER_DATA",
                payload: {
                    playlists,
                    likes,
                    watchLater,
                    history,
                },
            });
        }
    } catch (error) {
        console.log({ error });
    }
}
