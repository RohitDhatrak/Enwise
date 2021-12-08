import React from "react";
import { useLocation } from "react-router-dom";
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
            <MoreIcon
                color={"var(--icon-color)"}
                className="scale-15"
                onClick={toggleActionMenu}
            />
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
                                hover="background-color: var(--menu-hover-color)"
                                p="0.5em 1em"
                                br="0.4em"
                                align="center"
                                onClick={(e) =>
                                    addVideoToWatchLater(
                                        e,
                                        user.id,
                                        videoId,
                                        watchLater,
                                        dispatch
                                    )
                                }
                            >
                                <WatchLaterIcon
                                    color={"var(--icon-color)"}
                                    className="scale-14"
                                />
                                <Container ml="1em">
                                    Add to Watch Later
                                </Container>
                            </FlexContainer>
                        )}

                    {pathname !== "/playlists" && (
                        <FlexContainer
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e) => {
                                e.stopPropagation();
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
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e: ButtonEvent) => {
                                e.stopPropagation();
                                removeVideoFromPlaylist(
                                    e,
                                    user.id,
                                    videoId,
                                    playlistId,
                                    playlists,
                                    dispatch
                                );
                            }}
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container ml="1em" color="var(--error-color)">
                                Remove from Playlist
                            </Container>
                        </FlexContainer>
                    )}

                    {isAddedToWatchLater(videoId, watchLater) && (
                        <FlexContainer
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e) =>
                                deleteVideoFromWatchLater(
                                    e,
                                    user.id,
                                    videoId,
                                    watchLater,
                                    dispatch
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container ml="1em" color="var(--error-color)">
                                Remove from Watch Later
                            </Container>
                        </FlexContainer>
                    )}

                    {pathname === "/playlists" && (
                        <FlexContainer
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e) =>
                                deleteUserPlaylist(
                                    e,
                                    user.id,
                                    playlistId,
                                    playlists,
                                    dispatch
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container color="var(--error-color)" ml="1em">
                                Delete Playlist
                            </Container>
                        </FlexContainer>
                    )}

                    {pathname === "/liked" && isLiked(videoId, likes) && (
                        <FlexContainer
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e) =>
                                deleteVideoFromLiked(
                                    e,
                                    user.id,
                                    videoId,
                                    likes,
                                    dispatch
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container ml="1em" color="var(--error-color)">
                                Remove from Liked Videos
                            </Container>
                        </FlexContainer>
                    )}

                    {pathname === "/history" && isHistory(videoId, history) && (
                        <FlexContainer
                            hover="background-color: var(--menu-hover-color)"
                            p="0.5em 1em"
                            br="0.4em"
                            align="center"
                            onClick={(e) =>
                                deleteVideoFromHistory(
                                    e,
                                    user.id,
                                    videoId,
                                    history,
                                    dispatch
                                )
                            }
                        >
                            <DeleteIcon
                                color="var(--error-color)"
                                className="scale-15"
                            />
                            <Container ml="1em" color="var(--error-color)">
                                Remove from History
                            </Container>
                        </FlexContainer>
                    )}
                </FlexContainer>
            )}
        </Container>
    );
}
