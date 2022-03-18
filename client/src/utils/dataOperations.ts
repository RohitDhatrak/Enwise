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
    dispatch: Function,
    navigate: Function,
    isAddingToWatchLater: boolean,
    setIsAddingToWatchLater: Function
) {
    e.stopPropagation();
    if (isAddingToWatchLater) return;
    setIsAddingToWatchLater(true);
    if (!userId) return navigate("/login");
    const watchLaterObj = await addToWatchLater(userId, videoId);
    if (watchLaterObj.id) {
        dispatch({
            type: "SAVE_WATCHLATER",
            payload: { watchLater: [...watchLater, watchLaterObj] },
        });
    }
    setIsAddingToWatchLater(false);
}

export async function addVideoToLiked(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    likes: Liked[],
    dispatch: Function,
    isAddingToLiked: boolean,
    setIsAddingToLiked: Function
) {
    if (isAddingToLiked) return;
    setIsAddingToLiked(true);
    const likedObject = await addLikedVideo(userId, videoId);
    if (likedObject.id) {
        dispatch({
            type: "SAVE_LIKES",
            payload: { likes: [...likes, likedObject] },
        });
    }
    setIsAddingToLiked(false);
}

export async function createPlaylist(
    e: ButtonEvent,
    userId: number,
    title: string,
    playlists: Playlist[],
    dispatch: Function,
    toggleShowNewPlaylistInput: Function,
    setTitle: Function,
    isCreatingPlaylist: boolean,
    setIsCreatingPlaylist: Function
) {
    if (isCreatingPlaylist) return;
    setIsCreatingPlaylist(true);
    const playlistObject = await addPlaylist(userId, title);
    if (playlistObject.id) {
        dispatch({
            type: "SAVE_PLAYLISTS",
            payload: { playlists: [...playlists, playlistObject] },
        });
    }
    toggleShowNewPlaylistInput(false);
    setTitle("");
    setIsCreatingPlaylist(false);
}

export async function addOrRemoveFromPlaylist(
    e: InputEvent,
    userId: number,
    videoId: string,
    playlistId: number,
    playlists: Playlist[],
    dispatch: Function,
    isAddingToPlaylist: boolean,
    setIsAddingToPlaylist: Function,
    isRemovingFromPlaylist: boolean,
    setIsRemovingFromPlaylist: Function,
    loading: boolean
) {
    if (isAddingToPlaylist || isRemovingFromPlaylist || loading) return;
    if (e.target.checked) {
        setIsAddingToPlaylist(true);
        const playlistsArray = await addToPlaylist(userId, videoId, playlistId);
        if (playlistsArray.length === playlists.length) {
            dispatch({
                type: "SAVE_PLAYLISTS",
                payload: { playlists: playlistsArray },
            });
        }
    } else {
        setIsRemovingFromPlaylist(true);
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
    setIsAddingToPlaylist(false);
    setIsRemovingFromPlaylist(false);
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
    dispatch: Function,
    isRemovingFromPlaylist: boolean,
    setIsRemovingFromPlaylist: Function
) {
    e.stopPropagation();
    if (isRemovingFromPlaylist) return;
    setIsRemovingFromPlaylist(true);
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
    dispatch: Function,
    isRemovingFromHistory: boolean,
    setIsRemovingFromHistory: Function
) {
    e.stopPropagation();
    if (isRemovingFromHistory) return;
    setIsRemovingFromHistory(true);
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
    setIsRemovingFromHistory(false);
}

export async function deleteVideoFromWatchLater(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    watchLater: WatchLater[],
    dispatch: Function,
    isRemovingFromWatchLater: boolean,
    setIsRemovingFromWatchLater: Function
) {
    e.stopPropagation();
    if (isRemovingFromWatchLater) return;
    setIsRemovingFromWatchLater(true);
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
    setIsRemovingFromWatchLater(false);
}

export async function deleteUserPlaylist(
    e: ButtonEvent,
    userId: number,
    playlistId: number,
    playlists: Playlist[],
    dispatch: Function,
    isDeletingPlaylist: boolean,
    setIsDeletingPlaylist: Function
) {
    e.stopPropagation();
    if (isDeletingPlaylist) return;
    setIsDeletingPlaylist(true);
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
    setIsDeletingPlaylist(false);
}

export async function deleteVideoFromLiked(
    e: ButtonEvent,
    userId: number,
    videoId: string,
    likes: Liked[],
    dispatch: Function,
    isRemovingFromLiked: boolean,
    setIsRemovingFromLiked: Function
) {
    e.stopPropagation();
    if (isRemovingFromLiked) return;
    setIsRemovingFromLiked(true);
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
    setIsRemovingFromLiked(false);
}
