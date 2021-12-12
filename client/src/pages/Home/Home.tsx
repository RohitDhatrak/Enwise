import React from "react";
import { useLocation } from "react-router-dom";
import { VideoGrid, SidePannel, SidePannelMinimal } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";
import { Video } from "../../types/types";

export function Home() {
    const { videos } = useReducerContext();
    const { pathname, search } = useLocation();
    let filteredVideos: Video[] = [];
    videos.reverse();

    if (search && pathname === "/") {
        const query = search.split("=")[1];

        filteredVideos = videos.filter(
            (video) =>
                video.title.toLowerCase().trim().includes(query) ||
                video.creator.toLowerCase().trim().includes(query)
        );
    }

    async function getRecommendedCategories(dispatch: Function) {}

    return (
        <FlexContainer>
            <SidePannel />
            <SidePannelMinimal />
            {!search && <VideoGrid videos={videos} />}
            {search && <VideoGrid videos={filteredVideos} />}
        </FlexContainer>
    );
}
