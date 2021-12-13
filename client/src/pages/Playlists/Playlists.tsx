import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function Playlists() {
    const { playlists } = useReducerContext();
    return (
        <FlexContainer>
            <VideoGrid videos={[...playlists].reverse()} />
        </FlexContainer>
    );
}
