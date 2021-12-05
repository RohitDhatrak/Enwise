import styled from "styled-components";
import { media } from "../../components/Shared/mediaQueries";
import { Container } from "../../components/Shared";

export const VideoPlayerContainer = styled(Container)`
    ${media.custom(800)} {
        margin-left: 5em;
    }
    ${media.desktop} {
        margin-left: 15em;
        grid-template-columns: repeat(3, 25vw);
    }
`;
