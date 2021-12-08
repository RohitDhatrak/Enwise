import styled from "styled-components";
import { media } from "../Shared/mediaQueries";
import { GridContainer, Container } from "../Shared";

export const PageContainer = styled(Container)`
    ${media.custom(800)} {
        margin-left: 5em;
    }
    ${media.desktop} {
        margin-left: 15em;
    }
`;

export const VideoGridContainer = styled(GridContainer)`
    margin-bottom: 2em;
    grid-template-columns: repeat(1, 100vw);

    ${media.tablet} {
        grid-template-columns: repeat(2, 45vw);
    }
    ${media.custom(800)} {
        margin-bottom: 0em;
        grid-template-columns: repeat(2, 40vw);
    }
    ${media.largeTablet} {
        grid-template-columns: repeat(3, 28vw);
    }
    ${media.desktop} {
        grid-template-columns: repeat(3, 25vw);
    }
`;
