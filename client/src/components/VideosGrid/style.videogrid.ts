import styled from "styled-components";
import { media } from "../Shared/mediaQueries";
import { FlexContainer } from "../Shared";

export const VideoGridContainer = styled(FlexContainer)`
    &::after {
        content: "";
        flex: 0 0 50%;
        max-width: 480px;
    }
    ${media.custom(800)} {
        margin-left: 5em;
    }
    ${media.desktop} {
        margin-left: 15em;
    }
`;
