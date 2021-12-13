import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function WatchLater() {
    const { watchLater } = useReducerContext();
    return (
        <FlexContainer>
            <VideoGrid videos={[...watchLater].reverse()} />
        </FlexContainer>
    );
}
