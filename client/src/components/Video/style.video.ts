import styled from "styled-components";
import { media } from "../Shared/mediaQueries";

export const VideoContainer = styled.div`
    width: 100%;
    cursor: pointer;
    ${media.tablet} {
        width: 48%;
        margin-bottom: 1em;
    }
    ${media.largeTablet} {
        width: 31%;
        margin-bottom: 1.5em;
    }
    ${media.desktop} {
        width: 31%;
        margin-bottom: 1.5em;
    }
    ${media.custom(1280)} {
        width: 23%;
        margin-bottom: 2em;
    }
`;
