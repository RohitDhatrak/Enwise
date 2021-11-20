import React from "react";
import { ProfileIcon } from "../../assets/svg";
import { FlexContainer, Image } from "../Shared";
import {
    HeaderContainer,
    ProfileIconContainer,
    SearchContainer,
    Logo,
} from "./style.header";
import logo from "../../assets/logo.png";

export function Header() {
    return (
        <HeaderContainer
            as="header"
            justify="space-between"
            align="center"
            p="0.5em 1.2em"
            h="5em"
            position="sticky"
            top="0"
            bgc="var(--nav-color)"
            zIndex="var(--z-index-1)"
        >
            <FlexContainer align="center">
                <Image src={logo} alt="" mr="1em" w="3em" />
                <Logo fs="1.6rem" fw={600}>
                    Enwise
                </Logo>
            </FlexContainer>

            <SearchContainer
                bgc="var(--search-field-color)"
                b="1px solid var(--border-color)"
                h="3em"
                br="1em"
                p="1em"
                placeholder="Search for title or creator."
            />

            <ProfileIconContainer
                mr="1em"
                p="0.5em 0.7em"
                b="2px solid var(--primary-color)"
                br="50%"
                cursor="pointer"
            >
                <ProfileIcon color={"var(--icon-color)"} className="scale-15" />
            </ProfileIconContainer>
        </HeaderContainer>
    );
}
