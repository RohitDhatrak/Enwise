import React from "react";
import { Link, useLocation } from "react-router-dom";

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
    const { pathname } = useLocation();

    return (
        <SidePannelMinimalContainer
            as="nav"
            position="fixed"
            direction="column"
            w="5em"
            bgc="var(--nav-color)"
            h="100vh"
        >
            <Link to="/">
                <FlexContainer
                    w="100%"
                    direction="column"
                    justify="center"
                    align="center"
                    cursor="pointer"
                    textAlign="center"
                    fs="0.9rem"
                    p="1em 0"
                    bgc={
                        pathname === "/history" ? "var(--nav-hover-color)" : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
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
                    textAlign="center"
                    fs="0.9rem"
                    p="1em 0"
                    bgc={
                        pathname === "/history" ? "var(--nav-hover-color)" : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
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
                    textAlign="center"
                    fs="0.9rem"
                    p="1em 0"
                    bgc={
                        pathname === "/history" ? "var(--nav-hover-color)" : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
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
                    textAlign="center"
                    fs="0.9rem"
                    p="1em 0"
                    bgc={
                        pathname === "/history" ? "var(--nav-hover-color)" : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
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
                    textAlign="center"
                    fs="0.9rem"
                    p="1em 0"
                    bgc={
                        pathname === "/history" ? "var(--nav-hover-color)" : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
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
