import styled from "styled-components";
import { media } from "../Shared/mediaQueries";
import { GridContainer } from "../Shared";

export const VideoGridContainer = styled(GridContainer)`
    margin-bottom: 2em;
    grid-template-columns: repeat(1, 100vw);

    ${media.tablet} {
        grid-template-columns: repeat(2, 45vw);
    }
    ${media.custom(800)} {
        margin-bottom: 0em;
        margin-left: 5em;
        grid-template-columns: repeat(2, 40vw);
    }
    ${media.largeTablet} {
        grid-template-columns: repeat(3, 28vw);
    }
    ${media.desktop} {
        margin-left: 15em;
        grid-template-columns: repeat(3, 25vw);
    }
`;
