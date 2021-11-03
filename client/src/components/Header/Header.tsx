import React from "react";
import { SearchIcon } from "../../assets/svg";
import { Logo } from "./style";
import { FlexContainer } from "../Shared";

export function Header() {
    return (
        <FlexContainer
            jc="space-between"
            ai="center"
            h="2em"
            p="0.5em 1em"
            position="sticky"
            top="0"
            pt="0.3em"
            bgc="var(--bg-colour)"
        >
            <Logo>Bookscape</Logo>
            <SearchIcon />
        </FlexContainer>
    );
}
