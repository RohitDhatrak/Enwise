import styled from "styled-components";
import { media } from "../Shared/mediaQueries";
import { FlexContainer, Container, Input } from "../Shared";

export const HeaderContainer = styled(FlexContainer)`
    justify-content: space-around;
    ${media.custom(800)} {
        justify-content: space-between;
    }
`;

export const ProfileIconContainer = styled(Container)`
    display: none;
    ${media.custom(800)} {
        display: block;
    }
`;

export const SearchContainer = styled(Input)`
    width: 65vw;
    ${media.custom(800)} {
        display: block;
        width: 40vw;
    }
`;

export const Logo = styled(Container)`
    display: none;
    ${media.custom(800)} {
        display: block;
    }
`;
