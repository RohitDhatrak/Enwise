import React from "react";
import { VideoGrid, SidePannel, SidePannelMinimal } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function Liked() {
    const { likes } = useReducerContext();
    likes.reverse();
    return (
        <FlexContainer>
            <SidePannel />
            <SidePannelMinimal />
            <VideoGrid videos={likes} />
        </FlexContainer>
    );
}
