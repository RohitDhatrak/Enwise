import React from "react";
import { playlists } from "../../data/data";
import { VideoGrid, SidePannel, SidePannelMinimal } from "../../components";
import { FlexContainer } from "../../components/Shared";

export function Playlists() {
    return (
        <FlexContainer>
            <SidePannel />
            <SidePannelMinimal />
            <VideoGrid videos={playlists} />
        </FlexContainer>
    );
}
