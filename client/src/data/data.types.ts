export type Video = {
    videoId: string;
    title: string;
    creator: string;
};

export type Playlist = {
    videoId: string;
    title: string;
    creator: string;
    videos: Video[];
};
