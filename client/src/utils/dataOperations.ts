import {
    ButtonEvent,
    WatchLater,
    Liked,
    History,
    Playlist,
} from "../types/types";
import { addToWatchLater, addLikedVideo } from "../services/postUserData";
import {
    deleteLikedVideo,
    deleteHistory,
    deleteWatchLater,
    deletePlaylist,
} from "../services/deleteUserData";

export async function addVideoToWatchLater(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    watchLater: WatchLater[],
    dispatch: Function
) {
    e.stopPropagation();
    const watchLaterObj = await addToWatchLater(userId, videoId);
    if (watchLaterObj.id) {
        dispatch({
            type: "SAVE_WATCHLATER",
            payload: { watchLater: [...watchLater, watchLaterObj] },
        });
    }
}

export async function addVideoToLiked(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    likes: Liked[],
    dispatch: Function
) {
    const likedObject = await addLikedVideo(userId, videoId);
    if (likedObject.id) {
        dispatch({
            type: "SAVE_LIKES",
            payload: { likes: [...likes, likedObject] },
        });
    }
}

export async function deleteVideoFromHistory(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    history: History[],
    dispatch: Function
) {
    e.stopPropagation();
    const historyObj = await deleteHistory(userId, videoId);
    if (historyObj.videoId) {
        const newHistoryArray = history.filter(
            (historyVideo) => historyVideo.videoId !== historyObj.videoId
        );
        dispatch({
            type: "SAVE_HISTORY",
            payload: { history: newHistoryArray },
        });
    }
}

export async function deleteVideoFromWatchLater(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    watchLater: WatchLater[],
    dispatch: Function
) {
    e.stopPropagation();
    const watchLaterObj = await deleteWatchLater(userId, videoId);
    if (watchLaterObj.videoId) {
        const newWatchLaterArray = watchLater.filter(
            (watchLaterVideo) =>
                watchLaterVideo.videoId !== watchLaterObj.videoId
        );
        dispatch({
            type: "SAVE_WATCHLATER",
            payload: { watchLater: newWatchLaterArray },
        });
    }
}

export async function deleteUserPlaylist(
    e: ButtonEvent,
    userId: number,
    playlistId: number,
    playlists: Playlist[],
    dispatch: Function
) {
    e.stopPropagation();
    const deletedPlaylist = await deletePlaylist(userId, playlistId);
    if (deletedPlaylist.id) {
        const newPlaylistArray = playlists.filter(
            (playlist) => playlist.id !== deletedPlaylist.id
        );
        dispatch({
            type: "SAVE_PLAYLISTS",
            payload: { playlists: newPlaylistArray },
        });
    }
}

export async function deleteVideoFromLiked(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    likes: Liked[],
    dispatch: Function
) {
    e.stopPropagation();
    const likedObject = await deleteLikedVideo(userId, videoId);
    if (likedObject.videoId) {
        const newLikedVideosArray = likes.filter(
            (likedVideo) => likedVideo.videoId !== likedObject.videoId
        );
        dispatch({
            type: "SAVE_LIKES",
            payload: { likes: newLikedVideosArray },
        });
    }
}