import { Video } from "../../data/data.types";

export type VideoProps = {
    video: {
        videoId: string;
        title: string;
        creator: string;
        videos?: Video[];
    };
};
