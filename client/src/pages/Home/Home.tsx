import React from "react";
import { videos } from "../../data/data";
import { VideoGrid } from "../../components";

export function Home() {
    return (
        <div>
            <VideoGrid videos={videos} />
        </div>
    );
}
