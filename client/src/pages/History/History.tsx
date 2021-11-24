import React from "react";
import { videos } from "../../data/data";
import { VideoGrid, SidePannel, SidePannelMinimal } from "../../components";
import { FlexContainer } from "../../components/Shared";

export function History() {
    return (
        <FlexContainer>
            <SidePannel />
            <SidePannelMinimal />
            <VideoGrid videos={videos} />
        </FlexContainer>
    );
}