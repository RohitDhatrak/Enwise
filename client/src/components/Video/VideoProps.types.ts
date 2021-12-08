import {
    Video,
    Playlist,
    History,
    WatchLater,
    Liked,
    PlaylistVideo,
} from "../../types/types";

export type VideoProps = {
    video: Video | Playlist | History | WatchLater | Liked | PlaylistVideo;
};
