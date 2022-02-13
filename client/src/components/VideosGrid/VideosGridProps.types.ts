import {
    Video,
    Playlist,
    History,
    WatchLater,
    Liked,
    PlaylistVideo,
} from "../../types/types";

export type VideoGridProps = {
    videos:
        | Video[]
        | Playlist[]
        | History[]
        | WatchLater[]
        | Liked[]
        | PlaylistVideo[];
    playlistId?: string;
    isLoading?: boolean;
};
