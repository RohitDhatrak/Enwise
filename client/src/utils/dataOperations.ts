import {
    ButtonEvent,
    WatchLater,
    Liked,
    History,
    Playlist,
    InputEvent,
    User,
} from "../types/types";
import {
    addToWatchLater,
    addLikedVideo,
    addPlaylist,
    addToPlaylist,
    updateSaveHistory,
} from "../services/postUserData";
import {
    deleteLikedVideo,
    deleteHistory,
    deleteWatchLater,
    deletePlaylist,
    deleteFromPlaylist,
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

export async function createPlaylist(
    e: ButtonEvent,
    userId: number,
    title: string,
    playlists: Playlist[],
    dispatch: Function
) {
    const playlistObject = await addPlaylist(userId, title);
    if (playlistObject.id) {
        dispatch({
            type: "SAVE_PLAYLISTS",
            payload: { playlists: [...playlists, playlistObject] },
        });
    }
}

export async function addOrRemoveFromPlaylist(
    e: InputEvent,
    userId: number,
    videoId: string,
    playlistId: number,
    playlists: Playlist[],
    dispatch: Function
) {
    if (e.target.checked) {
        const playlistsArray = await addToPlaylist(userId, videoId, playlistId);
        if (playlistsArray.length === playlists.length) {
            dispatch({
                type: "SAVE_PLAYLISTS",
                payload: { playlists: playlistsArray },
            });
        }
    } else {
        const playlistsArray = await deleteFromPlaylist(
            userId,
            videoId,
            playlistId
        );
        if (playlistsArray.length === playlists.length) {
            dispatch({
                type: "SAVE_PLAYLISTS",
                payload: { playlists: playlistsArray },
            });
        }
    }
}

export async function toggleSaveHistory(
    e: InputEvent,
    user: User,
    dispatch: Function
) {
    const userData = await updateSaveHistory(user.id, user.saveHistory);
    dispatch({
        type: "SAVE_USER_SESSION",
        payload: { user: { ...user, ...userData } },
    });
}

export async function removeVideoFromPlaylist(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    playlistId: number,
    playlists: Playlist[],
    dispatch: Function
) {
    const playlistsArray = await deleteFromPlaylist(
        userId,
        videoId,
        playlistId
    );
    if (playlistsArray.length === playlists.length) {
        dispatch({
            type: "SAVE_PLAYLISTS",
            payload: { playlists: playlistsArray },
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
