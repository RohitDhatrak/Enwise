import React from "react";
import { VideoProps } from "./VideoProps.types";
import { Container, FlexContainer, Image } from "../Shared";
import { VideoContainer } from "./style.video";

export function Video({ video }: VideoProps) {
    return (
        <VideoContainer>
            <Image
                w="100%"
                src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
                alt="video thumbnail"
                br="2em"
            />
            <FlexContainer
                minH="3em"
                direction="column"
                justify="center"
                p="0.1em 0.5em 0.4em"
            >
                <Container fw={600}>{video.title}</Container>
                <Container fs="0.9rem" color="var(--font-color-2)">
                    {video.creator}
                </Container>
            </FlexContainer>
        </VideoContainer>
    );
}
