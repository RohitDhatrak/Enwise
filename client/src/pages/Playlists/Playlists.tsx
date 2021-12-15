import { useEffect } from "react";
import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function Playlists() {
    const { playlists } = useReducerContext();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <FlexContainer>
            <VideoGrid videos={[...playlists].reverse()} />
        </FlexContainer>
    );
}
