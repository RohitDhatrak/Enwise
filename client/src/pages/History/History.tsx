import { useEffect } from "react";
import { VideoGrid, SidePannel, SidePannelMinimal } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function History() {
    const { history } = useReducerContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <FlexContainer>
            <SidePannel />
            <SidePannelMinimal />
            <VideoGrid videos={[...history].reverse()} />
        </FlexContainer>
    );
}
