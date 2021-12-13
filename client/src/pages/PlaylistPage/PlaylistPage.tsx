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

    useEffect(() => {
        (async function () {
            if (playlistId) {
                const videos = await getPlaylistVideos(playlistId);
                setPlaylistVideos(videos);
            }
        })();
    }, [playlists]);

    return (
        <FlexContainer>
            <VideoGrid videos={playlistVideos} playlistId={playlistId} />
        </FlexContainer>
    );
}
