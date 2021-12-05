import { Video, Playlist, History, WatchLater, Liked } from "../../types/types";

export type VideoGridProps = {
    videos: Video[] | Playlist[] | History[] | WatchLater[] | Liked[];
};
