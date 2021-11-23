import React from "react";
import { FlexContainer, Container } from "../Shared";
import { CloseIcon, AddIcon } from "../../assets/svg";

export function AddToPlayListModal() {
    const dummaryPlaylists = [
        "Playlist 1",
        "Playlist 2",
        "Playlist 3",
        "Playlist 4",
    ];

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
        >
            <FlexContainer
                bgc="var(--modal-color)"
                p="0.5em 1em"
                minW="15em"
                direction="column"
            >
                <FlexContainer align="center" justify="space-between" w="100%">
                    <Container p="0.5em 0" fs="1.1rem">
                        Save to...
                    </Container>
                    <CloseIcon
                        cursor="pointer"
                        color={"var(--icon-color)"}
                        className="scale-14"
                    />
                </FlexContainer>

                {dummaryPlaylists.map((playlistName) => (
                    <FlexContainer color="#fff" p="0.5em 0" align="center">
                        <input
                            type="checkbox"
                            id=""
                            name={playlistName}
                            value={playlistName}
                        />
                        <Container ml="1em">
                            <label
                            // for=""
                            >
                                {playlistName}
                            </label>
                        </Container>
                    </FlexContainer>
                ))}

                <FlexContainer align="center" cursor="pointer">
                    <AddIcon color={"var(--icon-color)"} className="scale-14" />
                    <Container ml="1em" p="0.5em 0">
                        Create new playlist
                    </Container>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    );
}
