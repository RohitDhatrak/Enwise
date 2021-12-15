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
    jwt: string;
};

export type History = {
    id: string;
    createdAt: string;
    updatedAt: string;
    videoId: string;
    userId: number;
    video: Video;
};

export type Liked = History & {};
export type WatchLater = History & {};

export type Category = {
    id: number;
    name: string;
    createdAt?: string;
    updatedAt?: string;
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
    video: Video;
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
    | { type: "SAVE_VIDEOS"; payload: { videos: Array<Video> } }
    | { type: "SAVE_USER_SESSION"; payload: { user: User } }
    | { type: "SAVE_PLAYLISTS"; payload: { playlists: Array<Playlist> } }
    | { type: "SAVE_LIKES"; payload: { likes: Array<Liked> } }
    | { type: "SAVE_WATCHLATER"; payload: { watchLater: Array<WatchLater> } }
    | { type: "SAVE_HISTORY"; payload: { history: Array<History> } }
    | {
          type: "SAVE_USER_DATA";
          payload: {
              playlists: Array<Playlist>;
              likes: Array<Liked>;
              watchLater: Array<WatchLater>;
              history: Array<History>;
          };
      }
    | { type: "DELETE_USER_SESSION" };

export type ReducerContextTypes = ReducerInitialStateTypes & {
    dispatch: (action: Action) => void;
};

export type Children = { children: React.ReactElement };
export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonEvent =
    | React.MouseEvent<HTMLButtonElement>
    | React.MouseEvent<HTMLDivElement, MouseEvent>;
export type FormEvent = React.FormEvent;

export type ServerError = { message: string };
