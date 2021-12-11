import React from "react";
import { useLocation } from "react-router-dom";
import { VideoGridProps } from "./VideosGridProps.types";
import { Video } from "..";
import { VideoGridContainer, PageContainer } from "./style.videogrid";
import { Container, FlexContainer } from "../Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function VideoGrid({ videos, playlistId }: VideoGridProps) {
    const { pathname } = useLocation();

    const { playlists } = useReducerContext();
    let pageTitle = "";
    let filledPlaylist = [];
    if (pathname === "/liked") pageTitle = "Liked";
    else if (pathname === "/history") pageTitle = "History";
    else if (pathname === "/watchlater") pageTitle = "Watch Later";
    else if (pathname === "/playlists") {
        pageTitle = "Playlists";
        filledPlaylist = playlists.filter(
            (playlist) => playlist.videoCount > 0
        );
    } else {
        if (playlistId) {
            const playlist = playlists.find(
                (playlist) => playlist.id === Number(playlistId)
            );
            if (playlist) pageTitle = playlist.title;
        }
    }

    return (
        <PageContainer m="0 auto" w="100%" minH="100vh">
            {pathname !== "/" && (
                <FlexContainer
                    justify="center"
                    direction="column"
                    ml="1.5em"
                    mt="0.5em"
                    color="var(--font-color-2)"
                >
                    <Container fs="1.2rem">{pageTitle}</Container>
                    {pathname !== "/playlists" && (
                        <Container fs="0.9rem">
                            {`${videos.length} ${
                                videos.length === 1 ? "video" : "videos"
                            }`}
                        </Container>
                    )}
                    {pathname === "/playlists" && (
                        <Container fs="0.9rem">
                            {`${filledPlaylist.length} ${
                                filledPlaylist.length === 1
                                    ? "playlist"
                                    : "playlists"
                            }`}
                        </Container>
                    )}
                </FlexContainer>
            )}
            <VideoGridContainer gap="1em" justify="space-around" p="1em">
                {videos.map((video) => {
                    if (!("videoCount" in video) || video.videoCount > 0) {
                        return <Video key={video.id} video={video} />;
                    }
                    return null;
                })}
            </VideoGridContainer>
        </PageContainer>
    );
}
