import styled from "styled-components";
import { media } from "../../../components/Shared/mediaQueries";
import { FlexContainer } from "../../../components/Shared";

export const RecommendationsContainer = styled(FlexContainer)`
    ${media.custom(800)} {
        margin-left: 5em;
    }
    ${media.desktop} {
        margin-left: 15em;
    }
`;
