import React from "react";
import { Link } from "react-router-dom";

import { FlexContainer, Container } from "../Shared";
import { SidePannelMinimalContainer } from "./style.sidepannelminimal";
import {
    HomeIcon,
    FavIcon,
    PlayListIcon,
    WatchLater,
    HistoryIcon,
} from "../../assets/svg";

export function SidePannelMinimal() {
    return (
        <SidePannelMinimalContainer
            as="nav"
            position="fixed"
            direction="column"
            w="5em"
            bgc="var(--nav-color)"
            h="100vh"
            p="1.5em 0"
        >
            <Link to="/">
                <FlexContainer
                    w="100%"
                    direction="column"
                    justify="center"
                    align="center"
                    cursor="pointer"
                    m="0.5em 0"
                    textAlign="center"
                    fs="0.9rem"
                    p="0.5em 0"
                >
                    <HomeIcon color={"var(--icon-color)"} />
                    <Container mt="0.5em">Home</Container>
                </FlexContainer>
            </Link>
            <Link to="/favourite">
                <FlexContainer
                    w="100%"
                    direction="column"
                    justify="center"
                    align="center"
                    cursor="pointer"
                    m="0.5em 0"
                    textAlign="center"
                    fs="0.9rem"
                    p="0.5em 0"
                >
                    <FavIcon color={"var(--icon-color)"} className="scale-13" />
                    <Container mt="0.5em">Favourite</Container>
                </FlexContainer>
            </Link>
            <Link to="/playlists">
                <FlexContainer
                    w="100%"
                    direction="column"
                    justify="center"
                    align="center"
                    cursor="pointer"
                    m="0.5em 0"
                    textAlign="center"
                    fs="0.9rem"
                    p="0.5em 0"
                >
                    <PlayListIcon
                        color={"var(--icon-color)"}
                        className="scale-13"
                    />
                    <Container mt="0.5em">Playlists</Container>
                </FlexContainer>
            </Link>
            <Link to="/watchlater">
                <FlexContainer
                    w="100%"
                    direction="column"
                    justify="center"
                    align="center"
                    cursor="pointer"
                    m="0.5em 0"
                    textAlign="center"
                    fs="0.9rem"
                    p="0.5em 0"
                >
                    <WatchLater
                        color={"var(--icon-color)"}
                        className="scale-13"
                    />
                    <Container mt="0.5em">Watch Later</Container>
                </FlexContainer>
            </Link>
            <Link to="/history">
                <FlexContainer
                    w="100%"
                    direction="column"
                    justify="center"
                    align="center"
                    cursor="pointer"
                    m="0.5em 0"
                    textAlign="center"
                    fs="0.9rem"
                    p="0.5em 0"
                >
                    <HistoryIcon
                        color={"var(--icon-color)"}
                        className="scale-14"
                    />
                    <Container mt="0.5em">History</Container>
                </FlexContainer>
            </Link>
        </SidePannelMinimalContainer>
    );
}
