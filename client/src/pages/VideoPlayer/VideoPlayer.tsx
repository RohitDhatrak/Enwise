import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FlexContainer, Container } from "../../components/Shared";
import { VideoPlayerContainer } from "./style.videoPlayer";
import { useReducerContext } from "../../context/ReducerContext";
import {
    AddToPlayListIcon,
    LikeIcon,
    WatchLaterIcon,
    ShareIcon,
} from "../../assets/svg";
import { isLiked, isAddedToWatchLater } from "../../utils/isAddedInArray";
import {
    deleteVideoFromLiked,
    addVideoToWatchLater,
    deleteVideoFromWatchLater,
    addVideoToLiked,
} from "../../utils/dataOperations";
import { ButtonEvent } from "../../types/types";
import { useAppContext } from "../../context/AppContext";

export function VideoPlayer() {
    const { videoId } = useParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [isAddingToWatchLater, setIsAddingToWatchLater] = useState(false);
    const [isRemovingFromWatchLater, setIsRemovingFromWatchLater] =
        useState(false);
    const [isRemovingFromLiked, setIsRemovingFromLiked] = useState(false);
    const [isAddingToLiked, setIsAddingToLiked] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { videos, user, dispatch, likes, watchLater } = useReducerContext();
    const { toggleAddToPlaylistMenu, setVideoToBeAddedToPlaylist } =
        useAppContext();
    const [isLinkCopied, setIsLinkCopied] = useState(false);

    const video = videos.find((v) => v.id === videoId);

    let hasBeenLiked = false;
    if (videoId) {
        hasBeenLiked = isLiked(videoId, likes);
    }
    let hasAddedToWatchLater = false;
    if (videoId) {
        hasAddedToWatchLater = isAddedToWatchLater(videoId, watchLater);
    }

    async function toggleLike(e: ButtonEvent) {
        if (!user?.id) return navigate("/login");
        if (videoId) {
            if (!hasBeenLiked) {
                await addVideoToLiked(
                    e,
                    user.id,
                    videoId,
                    likes,
                    dispatch,
                    isAddingToLiked,
                    setIsAddingToLiked
                );
            } else {
                await deleteVideoFromLiked(
                    e,
                    user.id,
                    videoId,
                    likes,
                    dispatch,
                    isRemovingFromLiked,
                    setIsRemovingFromLiked
                );
            }
        }
    }

    async function toggleWatchLater(e: ButtonEvent) {
        if (!user?.id) return navigate("/login");
        if (videoId) {
            if (!hasAddedToWatchLater) {
                await addVideoToWatchLater(
                    e,
                    user.id,
                    videoId,
                    watchLater,
                    dispatch,
                    navigate,
                    isAddingToWatchLater,
                    setIsAddingToWatchLater
                );
            } else {
                await deleteVideoFromWatchLater(
                    e,
                    user.id,
                    videoId,
                    watchLater,
                    dispatch,
                    isRemovingFromWatchLater,
                    setIsRemovingFromWatchLater
                );
            }
        }
    }

    function copyLink() {
        navigator.clipboard.writeText(`https://enwise.netlify.app${pathname}`);
        toast("Link Copied", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        setIsLinkCopied(true);
        setTimeout(() => {
            setIsLinkCopied(false);
        }, 400);
    }

    function addToPlaylist() {
        if (!user?.id) return navigate("/login");
        setVideoToBeAddedToPlaylist(videoId);
        toggleAddToPlaylistMenu(true);
    }

    return (
        <FlexContainer>
            <VideoPlayerContainer>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <FlexContainer direction="column" m="1em">
                    <Container fw={600}>{video?.title}</Container>
                    <Container
                        fs="0.9rem"
                        color="var(--font-color-2)"
                        mt="0.5em"
                    >
                        {video?.creator}
                    </Container>
                    <FlexContainer m="1em 0" wrap="wrap" mb="4em">
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            b="none"
                            color="var(--font-color)"
                            align="center"
                            p="0.5em 1em"
                            bgc="var(--menu-hover-color)"
                            br="1em"
                            mr="1em"
                            mb="0.5em"
                            cursor="pointer"
                            onClick={toggleLike}
                        >
                            <LikeIcon
                                color={
                                    hasBeenLiked
                                        ? "var(--error-color)"
                                        : "var(--icon-color)"
                                }
                                className="scale-11"
                            />
                            <Container ml="0.5em">
                                {isAddingToLiked ? "Liking..." : "Like"}
                            </Container>
                        </FlexContainer>
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            b="none"
                            color="var(--font-color)"
                            align="center"
                            p="0.5em 1em"
                            bgc="var(--menu-hover-color)"
                            br="1em"
                            mr="1em"
                            mb="0.5em"
                            cursor="pointer"
                            onClick={toggleWatchLater}
                        >
                            <WatchLaterIcon
                                color={
                                    hasAddedToWatchLater
                                        ? "var(--secondary-color)"
                                        : "var(--icon-color)"
                                }
                                className="scale-12"
                            />
                            <Container ml="0.5em">
                                {isAddingToWatchLater
                                    ? "Adding..."
                                    : "Watch Later"}
                            </Container>
                        </FlexContainer>
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            b="none"
                            color="var(--font-color)"
                            align="center"
                            p="0.5em 1em"
                            bgc="var(--menu-hover-color)"
                            br="1em"
                            mr="1em"
                            mb="0.5em"
                            cursor="pointer"
                            onClick={addToPlaylist}
                        >
                            <AddToPlayListIcon
                                color={"var(--icon-color)"}
                                className="scale-15"
                            />
                            <Container ml="0.5em">Save</Container>
                        </FlexContainer>
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            b="none"
                            align="center"
                            p="0.5em 1em"
                            bgc="var(--menu-hover-color)"
                            br="1em"
                            mr="1em"
                            mb="0.5em"
                            cursor="pointer"
                            color={
                                isLinkCopied
                                    ? "var(--secondary-color)"
                                    : "var(--icon-color)"
                            }
                            onClick={copyLink}
                        >
                            <ShareIcon
                                color={
                                    isLinkCopied
                                        ? "var(--secondary-color)"
                                        : "var(--icon-color)"
                                }
                                className="scale-12"
                            />
                            <Container ml="0.5em">Copy Link</Container>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
            </VideoPlayerContainer>
        </FlexContainer>
    );
}
