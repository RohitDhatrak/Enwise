import React from "react";
import { FlexContainer, Container } from "../../Shared";
import { PlaylistNumIcon } from "../../../assets/svg";
import { PlaylistCountProps } from "./PlaylistCountProps.types";

export function PlaylistCount({ videoCount }: PlaylistCountProps) {
    return (
        <FlexContainer
            w="40%"
            h="100%"
            position="absolute"
            right="0"
            top="0"
            bgc="var(--bg-color)"
            opacity={0.7}
            justify="center"
            align="center"
            direction="column"
            fs="1.5rem"
        >
            {videoCount}
            <PlaylistNumIcon color={"var(--icon-color)"} className="scale-15" />
        </FlexContainer>
    );
}
