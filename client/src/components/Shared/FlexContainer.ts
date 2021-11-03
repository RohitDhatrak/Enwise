import styled, { css } from "styled-components";
import { ContainerCommonProps, CommonContainer } from "./CommonContainer";

export type FlexContainerProps = ContainerCommonProps & {
    display?: "flex";
    jc?: "center" | "baseline" | "space-between" | "space-around";
    ai?: "center" | "baseline";
    wrap?: "wrap";
    fd?: "column";
};

export const FlexContainer = styled(CommonContainer)<FlexContainerProps>`
    display: ${(props) => (props.display ? props.display : "flex")};

    ${(props) =>
        props.jc &&
        css`
            justify-content: ${() => props.jc};
        `}
    ${(props) =>
        props.ai &&
        css`
            align-items: ${() => props.ai};
        `}
    ${(props) =>
        props.wrap &&
        css`
            flex-wrap: ${() => props.wrap};
        `}
    ${(props) =>
        props.fd &&
        css`
            flex-direction: ${() => props.fd};
        `}
`;
