import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, FlexContainer } from "../../Shared";
import { ActionMenuProps } from "./ActionMenuProps.types";
import { useAppContext } from "../../../context/AppContext";
import { useReducerContext } from "../../../context/ReducerContext";
import { ButtonEvent } from "../../../types/types";
import {
    MoreIcon,
    AddToPlayListIcon,
    WatchLaterIcon,
    DeleteIcon,
} from "../../../assets/svg";
import {
    isLiked,
    isHistory,
    isAddedToWatchLater,
} from "../../../utils/isAddedInArray";
import {
    deleteVideoFromLiked,
    addVideoToWatchLater,
    deleteVideoFromHistory,
    deleteUserPlaylist,
    deleteVideoFromWatchLater,
    removeVideoFromPlaylist,
} from "../../../utils/dataOperations";

export function ActionMenu({ video }: ActionMenuProps) {
    const {
        displayActionMenu,
        setDisplayActionMenu,
        toggleAddToPlaylistMenu,
        setVideoToBeAddedToPlaylist,
        setActionMenuId,
        actionMenuId,
    } = useAppContext();
    const { likes, history, watchLater, user, dispatch, playlists } =
        useReducerContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [isAddingToWatchLater, setIsAddingToWatchLater] = useState(false);
    const [isRemovingFromWatchLater, setIsRemovingFromWatchLater] =
        useState(false);
    const [isRemovingFromHistory, setIsRemovingFromHistory] = useState(false);
    const [isRemovingFromPlaylist, setIsRemovingFromPlaylist] = useState(false);
    const [isDeletingPlaylist, setIsDeletingPlaylist] = useState(false);
    const [isRemovingFromLiked, setIsRemovingFromLiked] = useState(false);

    let videoId = "";
    if ("videoId" in video) {
        videoId = video.videoId;
    } else if (typeof video.id === "string") {
        videoId = video.id;
    }

    let playlistId = 0;
    if ("thumbnailId" in video) {
        playlistId = video.id;
    } else if ("playlistId" in video) {
        playlistId = video.playlistId;
    }

    function toggleActionMenu(e: ButtonEvent) {
        e.stopPropagation();
        if (displayActionMenu === false) {
            setDisplayActionMenu(true);
            setActionMenuId(video.id);
        } else {
            setDisplayActionMenu(false);
        }
    }

    return (
        <Container pt="0.2em" position="relative">
            <Container
                as="button"
                fs="1rem"
                bgc="transparent"
                b="none"
                color="var(--font-color)"
                p="0"
                cursor="pointer"
                onClick={toggleActionMenu}
            >
                <MoreIcon color={"var(--icon-color)"} className="scale-15" />
            </Container>
            {actionMenuId === video.id && displayActionMenu && (
                <FlexContainer
                    position="absolute"
                    right="0em"
                    bgc="var(--menu-color)"
                    w="max-content"
                    direction="column"
                    br="0.4em"
                    zIndex="var(--z-index-1)"
                >
                    {!isAddedToWatchLater(videoId, watchLater) &&
                        pathname !== "/playlists" && (
                            <FlexContainer
                                as="button"
                                fs="1rem"
                                textAlign="start"
                                bgc="transparent"
                                b="none"
                                color="var(--font-color)"
                                hover="background-color: var(--menu-hover-color)"
                                p="0.5em 1em"
                                br="0.4em"
                                align="center"
                                onClick={(e: ButtonEvent) =>
                                    addVideoToWatchLater(
                                        e,
                                        user.id,
                                        videoId,
                                        watchLater,
                                        dispatch,
                                        navigate,
                                        isAddingToWatchLater,
                                        setIsAddingToWatchLater
                                    )
                                }
                            >
                                <WatchLaterIcon
                                    color={"var(--icon-color)"}
                                    className="scale-14"
                                />
                                <Container ml="1em">
                                    {isAddingToWatchLater
                                        ? "Adding to Watch Later..."
                                        : "Add to Watch Later"}
                                </Container>
                            </FlexContainer>
                        )}

                    {pathname !== "/playlists" && (
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            textAlign="start"
                            bgc="transparent"
                            b="none"
                            color="var(--font-color)"
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e: ButtonEvent) => {
                                e.stopPropagation();
                                if (!user?.id) return navigate("/login");
                                setDisplayActionMenu(false);
                                toggleAddToPlaylistMenu(true);
                                setVideoToBeAddedToPlaylist(videoId);
                            }}
                        >
                            <AddToPlayListIcon
                                color={"var(--icon-color)"}
                                className="scale-15"
                            />
                            <Container ml="1em">Add to Playlist</Container>
                        </FlexContainer>
                    )}

                    {pathname.includes("/playlist/") && (
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            textAlign="start"
                            bgc="transparent"
                            b="none"
                            color="var(--font-color)"
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e: ButtonEvent) =>
                                removeVideoFromPlaylist(
                                    e,
                                    user.id,
                                    videoId,
                                    playlistId,
                                    playlists,
                                    dispatch,
                                    isRemovingFromPlaylist,
                                    setIsRemovingFromPlaylist
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container ml="1em" color="var(--error-color)">
                                {isRemovingFromPlaylist
                                    ? "Removing from Playlist..."
                                    : "Remove from Playlist"}
                            </Container>
                        </FlexContainer>
                    )}

                    {isAddedToWatchLater(videoId, watchLater) && (
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            textAlign="start"
                            bgc="transparent"
                            b="none"
                            color="var(--font-color)"
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e: ButtonEvent) =>
                                deleteVideoFromWatchLater(
                                    e,
                                    user.id,
                                    videoId,
                                    watchLater,
                                    dispatch,
                                    isRemovingFromWatchLater,
                                    setIsRemovingFromWatchLater
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container ml="1em" color="var(--error-color)">
                                {isRemovingFromWatchLater
                                    ? "Removing from Watch Later..."
                                    : "Remove from Watch Later"}
                            </Container>
                        </FlexContainer>
                    )}

                    {pathname === "/playlists" && (
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            textAlign="start"
                            bgc="transparent"
                            b="none"
                            color="var(--font-color)"
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e: ButtonEvent) =>
                                deleteUserPlaylist(
                                    e,
                                    user.id,
                                    playlistId,
                                    playlists,
                                    dispatch,
                                    isDeletingPlaylist,
                                    setIsDeletingPlaylist
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container color="var(--error-color)" ml="1em">
                                {isDeletingPlaylist
                                    ? "Deleting Playlist..."
                                    : "Delete Playlist"}
                            </Container>
                        </FlexContainer>
                    )}

                    {pathname === "/liked" && isLiked(videoId, likes) && (
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            textAlign="start"
                            bgc="transparent"
                            b="none"
                            color="var(--font-color)"
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e: ButtonEvent) =>
                                deleteVideoFromLiked(
                                    e,
                                    user.id,
                                    videoId,
                                    likes,
                                    dispatch,
                                    isRemovingFromLiked,
                                    setIsRemovingFromLiked
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container ml="1em" color="var(--error-color)">
                                {isRemovingFromLiked
                                    ? "Removing from Liked Videos..."
                                    : "Remove from Liked Videos"}
                            </Container>
                        </FlexContainer>
                    )}

                    {pathname === "/history" && isHistory(videoId, history) && (
                        <FlexContainer
                            as="button"
                            fs="1rem"
                            textAlign="start"
                            bgc="transparent"
                            b="none"
                            color="var(--font-color)"
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e: ButtonEvent) =>
                                deleteVideoFromHistory(
                                    e,
                                    user.id,
                                    videoId,
                                    history,
                                    dispatch,
                                    isRemovingFromHistory,
                                    setIsRemovingFromHistory
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container ml="1em" color="var(--error-color)">
                                {isRemovingFromHistory
                                    ? "Removing from History..."
                                    : "Remove from History"}
                            </Container>
                        </FlexContainer>
                    )}
                </FlexContainer>
            )}
        </Container>
    );
}
