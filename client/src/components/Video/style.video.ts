import styled from "styled-components";
import { media } from "../Shared/mediaQueries";
import { Container } from "../Shared";

export const VideoContainer = styled(Container)`
    cursor: pointer;
    width: 90%;
    margin-bottom: 0.5em;
    ${media.tablet} {
        width: 45vw;
        margin-bottom: 1.5em;
    }
    ${media.custom(800)} {
        width: 40vw;
    }
    ${media.largeTablet} {
        width: 28vw;
    }
    ${media.desktop} {
        width: 25vw;
    }
`;
