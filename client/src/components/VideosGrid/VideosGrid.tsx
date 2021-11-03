import React from "react";
import { FlexContainer } from "../Shared";
import { VideoGridProps } from "./VideosGridProps.types";
import { Video } from "..";

export function VideoGrid({ videos }: VideoGridProps) {
    return (
        <FlexContainer wrap="wrap" jc="space-around">
            {videos.map((video) => (
                <Video video={video} />
            ))}
        </FlexContainer>
    );
}
