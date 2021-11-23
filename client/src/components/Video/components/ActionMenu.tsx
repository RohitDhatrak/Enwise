import React, { useState } from "react";
import { Container, FlexContainer } from "../../Shared";
import {
    MoreIcon,
    AddToPlayListIcon,
    WatchLaterIcon,
} from "../../../assets/svg";
import { ActionMenuProps } from "./ActionMenuProps.types";

export function ActionMenu({ video }: ActionMenuProps) {
    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <Container pt="0.2em" position="relative">
            <MoreIcon
                color={"var(--icon-color)"}
                className="scale-15"
                onClick={() => setDisplayMenu(!displayMenu)}
            />
            {displayMenu && (
                <FlexContainer
                    position="absolute"
                    right="0em"
                    bgc="var(--menu-color)"
                    w="max-content"
                    direction="column"
                    br="0.4em"
                    zIndex="var(--z-index-1)"
                >
                    <FlexContainer
                        hover="background-color: var(--menu-hover-color)"
                        p="0.5em 1em"
                        br="0.4em"
                        align="center"
                    >
                        <WatchLaterIcon
                            color={"var(--icon-color)"}
                            className="scale-14"
                        />
                        <Container ml="1em">Add to Watch Later</Container>
                    </FlexContainer>
                    <FlexContainer
                        hover="background-color: var(--menu-hover-color)"
                        p="0.5em 1em"
                        br="0.4em"
                        align="center"
                    >
                        <AddToPlayListIcon
                            color={"var(--icon-color)"}
                            className="scale-15"
                        />
                        <Container ml="1em">Add to Playlist</Container>
                    </FlexContainer>
                </FlexContainer>
            )}
        </Container>
    );
}
