import { History, Liked, WatchLater } from "../types/types";

export function isLiked(videoId: string, likes: Liked[]) {
    return !!likes.find((likedVideo) => videoId === likedVideo.videoId);
}

export function isHistory(videoId: string, history: History[]) {
    return !!history.find((historyVideo) => videoId === historyVideo.videoId);
}

export function isAddedToWatchLater(videoId: string, watchLater: WatchLater[]) {
    return !!watchLater.find(
        (watchLaterVideo) => videoId === watchLaterVideo.videoId
    );
}
