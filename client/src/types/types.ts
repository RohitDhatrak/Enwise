export type Video = {
    id: string;
    title: string;
    creator: string;
    category: Array<string>;
    createdAt: string;
    updatedAt: string;
};

export type User = {
    id: number;
    isAdmin: boolean;
    saveHistory: boolean;
};

export type History = {
    id: string;
    createdAt: string;
    updatedAt: string;
    videoId: string;
    userId: number;
    video: Video;
};

export type Liked = History;
export type WatchLater = History;

export type Category = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
};

export type Playlist = {
    id: number;
    thumbnailId: string | null;
    title: string;
    videoCount: number;
    createdAt: string;
    updatedAt: string;
    userId: number;
};

export type PlaylistVideo = {
    id: number;
    createdAt: string;
    updatedAt: string;
    playlistId: number;
    videoId: string;
    video: Array<Video>;
};

export type ReducerInitialStateTypes = {
    videos: Array<Video>;
    user: User;
    playlists: Array<Playlist>;
    likes: Array<Liked>;
    watchLater: Array<WatchLater>;
    history: Array<History>;
};

export type Action =
    | { type: "SET_VIDEOS"; payload: { videos: Array<Video> } }
    | { type: "SET_USER"; payload: { user: User } }
    | { type: "SET_PLAYLISTS"; payload: { playlists: Array<Playlist> } }
    | { type: "SET_LIKES"; payload: { likes: Array<Liked> } }
    | { type: "SET_WATCHLATER"; payload: { watchLater: Array<WatchLater> } }
    | { type: "SET_HISTORY"; payload: { history: Array<History> } }
    | { type: "RESET" };

export type ReducerContextTypes = ReducerInitialStateTypes & {
    dispatch: (action: Action) => void;
};

export type Children = { children: React.ReactNode };
