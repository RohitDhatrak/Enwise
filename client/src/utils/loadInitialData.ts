import { getVideos } from "../services/getVideos";
import { User } from "../types/types";
import {
    getPlaylists,
    getLikedVideos,
    getHistory,
    getWatchLater,
    getUserData,
    getCategories,
} from "../services/getUserData";

async function getRecommendedCategories(n: number) {
    let categoriesArray = await getCategories();
    if (n >= categoriesArray.length) {
        return categoriesArray;
    } else {
        const shuffledCategories = categoriesArray.sort(
            () => 0.5 - Math.random()
        );
        return shuffledCategories.slice(0, n);
    }
}

export async function loadInitialData(
    user: User,
    dispatch: Function,
    setIsLoading: Function,
    setCategories: Function,
    setIsUserDataFetched: Function
) {
    try {
        const [videos, categoriesArray] = await Promise.all([
            getVideos(),
            getRecommendedCategories(8),
        ]);
        dispatch({
            type: "SAVE_VIDEOS",
            payload: { videos },
        });
        setCategories(categoriesArray);

        if (user.id) {
            const userData = await getUserData(user.id);
            dispatch({
                type: "SAVE_USER_SESSION",
                payload: { user: { ...user, ...userData } },
            });
            setIsLoading(false);
            const [playlists, likes, watchLater, history] = await Promise.all([
                getPlaylists(user.id),
                getLikedVideos(user.id),
                getWatchLater(user.id),
                getHistory(user.id),
            ]);
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
        setIsLoading(false);
        setIsUserDataFetched(true);
    } catch (error) {
        console.log({ error });
    }
}
