import { useEffect } from "react";
import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function WatchLater() {
    const { watchLater } = useReducerContext();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <FlexContainer>
            <VideoGrid videos={[...watchLater].reverse()} />
        </FlexContainer>
    );
}
