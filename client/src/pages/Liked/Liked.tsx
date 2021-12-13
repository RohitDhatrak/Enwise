import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function Liked() {
    const { likes } = useReducerContext();
    return (
        <FlexContainer>
            <VideoGrid videos={[...likes].reverse()} />
        </FlexContainer>
    );
}
