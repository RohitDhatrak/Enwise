import React from "react";
import { Link } from "react-router-dom";
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
    return (
        <SidePannelContainer
            as="nav"
            position="fixed"
            direction="column"
            w="15em"
            bgc="var(--nav-color)"
            h="100vh"
            p="1.5em 2.15em"
        >
            <Link to="/">
                <FlexContainer w="100%" m="1em 0" p="0.5em 0" cursor="pointer">
                    <HomeIcon color={"var(--icon-color)"} />
                    <Container ml="2em">Home</Container>
                </FlexContainer>
            </Link>
            <Link to="/favourite">
                <FlexContainer w="100%" m="1em 0" p="0.5em 0" cursor="pointer">
                    <FavIcon color={"var(--icon-color)"} className="scale-13" />
                    <Container ml="2em">Favourite</Container>
                </FlexContainer>
            </Link>
            <Link to="/playlists">
                <FlexContainer w="100%" m="1em 0" p="0.5em 0" cursor="pointer">
                    <PlayListIcon
                        color={"var(--icon-color)"}
                        className="scale-13"
                    />
                    <Container ml="2em">Playlists</Container>
                </FlexContainer>
            </Link>
            <Link to="/watchlater">
                <FlexContainer w="100%" m="1em 0" p="0.5em 0" cursor="pointer">
                    <WatchLater
                        color={"var(--icon-color)"}
                        className="scale-13"
                    />
                    <Container ml="2em">Watch Later</Container>
                </FlexContainer>
            </Link>
            <Link to="/history">
                <FlexContainer w="100%" m="1em 0" p="0.5em 0" cursor="pointer">
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
