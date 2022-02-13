import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";
import { PlaylistVideo } from "../../types/types";
import { getPlaylistVideos } from "../../services/getUserData";

export function PlaylistPage() {
    const [playlistVideos, setPlaylistVideos] = useState<PlaylistVideo[]>(
        [] as PlaylistVideo[]
    );
    const { playlistId } = useParams();
    const { playlists } = useReducerContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        (async function () {
            if (playlistId) {
                const videos = await getPlaylistVideos(playlistId);
                setPlaylistVideos(videos);
                setIsLoading(false);
            }
        })();
    }, [playlists]);

    return (
        <FlexContainer>
            <VideoGrid
                videos={playlistVideos}
                playlistId={playlistId}
                isLoading={isLoading}
            />
        </FlexContainer>
    );
}
