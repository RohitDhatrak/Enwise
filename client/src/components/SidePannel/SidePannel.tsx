import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FlexContainer, Container } from "../Shared";
import { SidePannelContainer } from "./style.sidepannel";
import {
    HomeIcon,
    FavIcon,
    PlayListIcon,
    WatchLater,
    HistoryIcon,
} from "../../assets/svg";

export function SidePannel() {
    const { pathname } = useLocation();

    return (
        <SidePannelContainer
            as="nav"
            position="fixed"
            direction="column"
            w="15em"
            bgc="var(--nav-color)"
            h="100vh"
        >
            <Link to="/">
                <FlexContainer
                    w="100%"
                    p="1em 2.1em"
                    cursor="pointer"
                    bgc={pathname === "/" ? "var(--nav-hover-color)" : ""}
                    hover="background-color: var(--nav-hover-color)"
                >
                    <HomeIcon color={"var(--icon-color)"} />
                    <Container ml="2em">Home</Container>
                </FlexContainer>
            </Link>
            <Link to="/favourite">
                <FlexContainer
                    w="100%"
                    p="1em 2.1em"
                    cursor="pointer"
                    bgc={
                        pathname === "/favourite"
                            ? "var(--nav-hover-color)"
                            : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
                >
                    <FavIcon color={"var(--icon-color)"} className="scale-13" />
                    <Container ml="2em">Favourite</Container>
                </FlexContainer>
            </Link>
            <Link to="/playlists">
                <FlexContainer
                    w="100%"
                    p="1em 2.1em"
                    cursor="pointer"
                    bgc={
                        pathname === "/playlists"
                            ? "var(--nav-hover-color)"
                            : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
                >
                    <PlayListIcon
                        color={"var(--icon-color)"}
                        className="scale-13"
                    />
                    <Container ml="2em">Playlists</Container>
                </FlexContainer>
            </Link>
            <Link to="/watchlater">
                <FlexContainer
                    w="100%"
                    p="1em 2.1em"
                    cursor="pointer"
                    bgc={
                        pathname === "/watchlater"
                            ? "var(--nav-hover-color)"
                            : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
                >
                    <WatchLater
                        color={"var(--icon-color)"}
                        className="scale-13"
                    />
                    <Container ml="2em">Watch Later</Container>
                </FlexContainer>
            </Link>
            <Link to="/history">
                <FlexContainer
                    w="100%"
                    p="1em 2.1em"
                    cursor="pointer"
                    bgc={
                        pathname === "/history" ? "var(--nav-hover-color)" : ""
                    }
                    hover="background-color: var(--nav-hover-color)"
                >
                    <HistoryIcon
                        color={"var(--icon-color)"}
                        className="scale-15"
                    />
                    <Container ml="2em">History</Container>
                </FlexContainer>
            </Link>
        </SidePannelContainer>
    );
}
