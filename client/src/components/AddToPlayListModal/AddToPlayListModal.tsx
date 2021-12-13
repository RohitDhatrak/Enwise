import { useEffect, useState } from "react";
import { FlexContainer, Container, Input } from "../Shared";
import { CloseIcon, AddIcon } from "../../assets/svg";
import { useAppContext } from "../../context/AppContext";
import { useReducerContext } from "../../context/ReducerContext";
import { InputEvent, ButtonEvent, PlaylistVideo } from "../../types/types";
import {
    createPlaylist,
    addOrRemoveFromPlaylist,
} from "../../utils/dataOperations";
import { getPlaylistsByVideo } from "../../services/getUserData";

export function AddToPlayListModal() {
    const { playlists, user, dispatch } = useReducerContext();
    const { toggleAddToPlaylistMenu, videoToBeAddedToPlaylist } =
        useAppContext();
    const [showNewPlaylistInput, toggleShowNewPlaylistInput] = useState(false);
    const [title, setTitle] = useState("");
    const [playlistArray, setPlaylistArray] = useState([] as PlaylistVideo[]);

    function isChecked(playlistId: number) {
        return !!playlistArray.find(
            (playlist: PlaylistVideo) => playlist.playlistId === playlistId
        );
    }

    useEffect(() => {
        (async function () {
            const playlistByVideoArray = await getPlaylistsByVideo(
                videoToBeAddedToPlaylist,
                user.id
            );
            setPlaylistArray(playlistByVideoArray);
        })();
    }, [playlists]);

    return (
        <FlexContainer
            justify="center"
            align="center"
            bgc="var(--modal-bg-color)"
            position="fixed"
            zIndex="3"
            opacity={1}
            w="100vw"
            h="100vh"
            top="0"
            left="0"
            cursor="default"
            onClick={() => toggleAddToPlaylistMenu(false)}
        >
            <FlexContainer
                bgc="var(--modal-color)"
                p="0.5em 1em"
                minW="20em"
                direction="column"
                onClick={(e) => e.stopPropagation()}
            >
                <FlexContainer align="center" justify="space-between" w="100%">
                    <Container p="0.5em 0" fs="1.1rem">
                        Save to...
                    </Container>
                    <CloseIcon
                        cursor="pointer"
                        color={"var(--icon-color)"}
                        className="scale-14"
                        onClick={() => toggleAddToPlaylistMenu(false)}
                    />
                </FlexContainer>

                <FlexContainer direction="column" maxH="15em" overflow="auto">
                    {playlists.map((playlist) => (
                        <FlexContainer
                            color="#fff"
                            p="0.5em 0"
                            align="center"
                            onChange={(e: InputEvent) =>
                                addOrRemoveFromPlaylist(
                                    e,
                                    user.id,
                                    videoToBeAddedToPlaylist,
                                    playlist.id,
                                    playlists,
                                    dispatch
                                )
                            }
                        >
                            <input
                                type="checkbox"
                                id={playlist.title + playlist.id}
                                name={playlist.title}
                                checked={isChecked(playlist.id)}
                                style={{ cursor: "pointer" }}
                            />
                            <label
                                htmlFor={playlist.title + playlist.id}
                                style={{
                                    cursor: "pointer",
                                    paddingLeft: "1em",
                                }}
                            >
                                {playlist.title}
                            </label>
                        </FlexContainer>
                    ))}
                </FlexContainer>

                {!showNewPlaylistInput && (
                    <FlexContainer
                        align="center"
                        cursor="pointer"
                        onClick={() => toggleShowNewPlaylistInput(true)}
                    >
                        <AddIcon
                            color={"var(--icon-color)"}
                            className="scale-14"
                        />
                        <Container ml="1em" p="0.5em 0">
                            Create new playlist
                        </Container>
                    </FlexContainer>
                )}

                {showNewPlaylistInput && (
                    <FlexContainer cursor="pointer" direction="column" mt="1em">
                        <label htmlFor="playlistTitle">Name</label>
                        <Input
                            type="input"
                            id="playlistTitle"
                            value={title}
                            placeholder="Playlist Name"
                            bgc="var(--search-field-color)"
                            color="#fff"
                            b="none"
                            br="0.5em"
                            h="2em"
                            m="0.5em 0"
                            p="0.5em"
                            fs="1rem"
                            onChange={(e: InputEvent) =>
                                setTitle(e.target.value)
                            }
                        />
                        <Container
                            as="button"
                            fs="1rem"
                            br="0.5em"
                            h="2em"
                            cursor="pointer"
                            disabled={!title.trim()}
                            onClick={(e: ButtonEvent) => {
                                createPlaylist(
                                    e,
                                    user.id,
                                    title,
                                    playlists,
                                    dispatch
                                );
                                toggleShowNewPlaylistInput(false);
                                setTitle("");
                            }}
                        >
                            Create
                        </Container>
                    </FlexContainer>
                )}
            </FlexContainer>
        </FlexContainer>
    );
}
