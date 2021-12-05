import {
    Video,
    Playlist,
    History,
    WatchLater,
    Liked,
} from "../../../types/types";

export type ActionMenuProps = {
    video: Video | Playlist | History | WatchLater | Liked;
};
