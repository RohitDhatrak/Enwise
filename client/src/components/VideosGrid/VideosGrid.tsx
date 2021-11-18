import React from "react";
import { VideoGridProps } from "./VideosGridProps.types";
import { Video } from "..";
import { VideoGridContainer } from "./style.videogrid";

export function VideoGrid({ videos }: VideoGridProps) {
    return (
        <VideoGridContainer
            wrap="wrap"
            justify="space-around"
            mt="2em"
            mb="2em"
        >
            {videos.map((video) => (
                <Video video={video} />
            ))}
        </VideoGridContainer>
    );
}
