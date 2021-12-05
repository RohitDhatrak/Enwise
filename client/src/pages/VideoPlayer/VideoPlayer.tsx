import React from "react";
import { useParams } from "react-router-dom";
import { FlexContainer, Container } from "../../components/Shared";
import { SidePannel, SidePannelMinimal } from "../../components";
import { VideoPlayerContainer } from "./style.videoPlayer";

export function VideoPlayer() {
    const { videoId } = useParams();
    return (
        <FlexContainer>
            <SidePannel />
            <SidePannelMinimal />
            <VideoPlayerContainer w="100%" h="80vh">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </VideoPlayerContainer>
            <FlexContainer>
                <Container fw={600}>{video.title}</Container>
                <Container fs="0.9rem" color="var(--font-color-2)">
                    {video.creator}
                </Container>
            </FlexContainer>
        </FlexContainer>
    );
}
