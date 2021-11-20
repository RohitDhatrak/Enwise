import React from "react";
import { VideoGridProps } from "./VideosGridProps.types";
import { Video } from "..";
import { VideoGridContainer } from "./style.videogrid";
import { Container } from "../Shared";

export function VideoGrid({ videos }: VideoGridProps) {
    return (
        <Container m="0 auto" w="100%">
            <VideoGridContainer gap="1rem" justify="space-around" p="1em">
                {videos.map((video) => (
                    <Video video={video} />
                ))}
            </VideoGridContainer>
        </Container>
    );
}
