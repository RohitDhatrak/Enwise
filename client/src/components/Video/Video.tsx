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
            ></Image>
            <FlexContainer
                minH="3em"
                fd="column"
                jc="center"
                p="0.1em 0.5em 0.4em"
            >
                <Container fw={500}>{video.title}</Container>
                <Container fs="0.9rem">{video.creator}</Container>
            </FlexContainer>
        </VideoContainer>
    );
}
