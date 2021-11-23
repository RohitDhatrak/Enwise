import React from "react";
import { VideoProps } from "./VideoProps.types";
import { Container, FlexContainer, Image } from "../Shared";
import { VideoContainer } from "./style.video";
import { Link, useLocation } from "react-router-dom";
import { PlaylistCount } from "./components/PlaylistCount";
import { ActionMenu } from "./components/ActionMenu";

export function Video({ video, videoCount }: VideoProps) {
    const { pathname } = useLocation();

    return (
        <VideoContainer cursor="pointer" m="0 auto">
            <Container position="relative">
                <Image
                    w="100%"
                    src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt="video thumbnail"
                    br="1em"
                ></Image>
                {pathname === "/playlists" && (
                    <PlaylistCount videoCount={videoCount} />
                )}
            </Container>
            <FlexContainer justify="space-between" p="0.2em 0.5em" pb="0em">
                <FlexContainer direction="column">
                    <Container fw={600}>{video.title}</Container>
                    {pathname !== "/playlists" && (
                        <Container fs="0.9rem" color="var(--font-color-2)">
                            {video.creator}
                        </Container>
                    )}
                </FlexContainer>
                <ActionMenu video={video} />
            </FlexContainer>
        </VideoContainer>
    );
}
