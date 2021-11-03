import React from "react";
import { FlexContainer, Container } from "../Shared";
import { HomeIcon, PlayListIcon, ProfileIcon } from "../../assets/svg";

export function BottomNav() {
    return (
        <FlexContainer
            bottom="0"
            jc="space-around"
            position="fixed"
            w="100vw"
            bgc="#fff"
            p="0.3em 0em"
            bt="1px solid #e3eaec"
        >
            <FlexContainer fd="column" pt="0.4em" ai="center" cursor="pointer">
                <HomeIcon />
                <Container fs="0.8rem" pt="0.4em">
                    Home
                </Container>
            </FlexContainer>
            <FlexContainer fd="column" pt="0.4em" ai="center" cursor="pointer">
                <PlayListIcon />
                <Container fs="0.8rem" pt="0.4em">
                    Playlists
                </Container>
            </FlexContainer>
            <FlexContainer fd="column" pt="0.4em" ai="center" cursor="pointer">
                <ProfileIcon />
                <Container fs="0.8rem" pt="0.4em">
                    Profile
                </Container>
            </FlexContainer>
        </FlexContainer>
    );
}
