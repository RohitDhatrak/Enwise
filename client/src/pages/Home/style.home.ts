import styled from "styled-components";
import { media } from "../../components/Shared/mediaQueries";
import { FlexContainer, Container } from "../../components/Shared";

export const PageContainer = styled(Container)`
    width: 100vw;
    ${media.custom(800)} {
        margin-left: 5em;
    }
    ${media.desktop} {
        margin-left: 15em;
    }
`;

export const LoaderContainer = styled(FlexContainer)`
    ${media.custom(800)} {
        margin-left: 5em;
    }
    ${media.desktop} {
        margin-left: 15em;
    }
`;
