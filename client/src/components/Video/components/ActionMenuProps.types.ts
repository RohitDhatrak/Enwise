import {
    Video,
    Playlist,
    History,
    WatchLater,
    Liked,
    PlaylistVideo,
} from "../../../types/types";

export type ActionMenuProps = {
    video: Video | Playlist | History | WatchLater | Liked | PlaylistVideo;
};
