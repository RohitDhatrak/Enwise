import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VideoProps } from "./VideoProps.types";
import { Container, FlexContainer, Image } from "../Shared";
import { VideoContainer } from "./style.video";
import { PlaylistCount } from "./components/PlaylistCount";
import { ActionMenu } from "./components/ActionMenu";
import { isHistory } from "../../utils/isAddedInArray";
import { useReducerContext } from "../../context/ReducerContext";
import { addHistory } from "../../services/postUserData";

export function Video({ video }: VideoProps) {
    const { history, user, dispatch } = useReducerContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    let playlistId: number;
    let imageId = "";
    if ("thumbnailId" in video && video.thumbnailId !== null) {
        imageId = video.thumbnailId;
        playlistId = video.id;
    } else if ("videoId" in video) {
        imageId = video.videoId;
    }

    let videoId = "";
    if ("videoId" in video) {
        videoId = video.videoId;
    } else if (typeof video.id === "string") {
        videoId = video.id;
    }

    async function addToHistory() {
        if (!isHistory(videoId, history) && !("thumbnailId" in video)) {
            const historyVideo = await addHistory(user.id, videoId);
            dispatch({
                type: "SAVE_HISTORY",
                payload: { history: [...history, historyVideo] },
            });
        }
    }

    function openVideo() {
        if (pathname !== "/playlists") {
            navigate(`/${videoId}`);
        } else {
            navigate(`/playlist/${playlistId}`);
        }
        addToHistory();
    }

    return (
        <VideoContainer cursor="pointer" m="0 auto" onClick={openVideo}>
            <Container position="relative">
                <Image
                    w="100%"
                    src={`https://i.ytimg.com/vi/${imageId || video.id}/0.jpg`}
                    alt="video thumbnail"
                    br="1em"
                ></Image>
                {"videoCount" in video && (
                    <PlaylistCount videoCount={video.videoCount} />
                )}
            </Container>
            <FlexContainer justify="space-between" p="0.2em 0.5em" pb="0em">
                <FlexContainer direction="column">
                    {"title" in video && (
                        <Container fw={600}>{video.title}</Container>
                    )}
                    {"video" in video && (
                        <Container fw={600}>{video.video.title}</Container>
                    )}
                    {"creator" in video && (
                        <Container fs="0.9rem" color="var(--font-color-2)">
                            {video.creator}
                        </Container>
                    )}
                    {"video" in video && (
                        <Container fs="0.9rem" color="var(--font-color-2)">
                            {video.video.creator}
                        </Container>
                    )}
                </FlexContainer>
                <ActionMenu video={video} />
            </FlexContainer>
        </VideoContainer>
    );
}
