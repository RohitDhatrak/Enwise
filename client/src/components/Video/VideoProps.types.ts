import { Video, Playlist, History, WatchLater, Liked } from "../../types/types";

export type VideoProps = {
    video: Video | Playlist | History | WatchLater | Liked;
};
