import styled from "styled-components";
import { ContainerCommonProps, CommonContainer } from "./CommonContainer";

export type FlexContainerProps = ContainerCommonProps & {
    display?: "flex";
    jc?: "center" | "baseline" | "space-between" | "space-around";
    ai?: "center" | "baseline";
    wrap?: "wrap";
    fd?: "column";
};

export const FlexContainer = styled(CommonContainer)<FlexContainerProps>`
    display: flex;
    justify-content: ${(props) => (props.jc ? props.jc : "flex-start")};
    align-items: ${(props) => (props.ai ? props.ai : "stretch")};
    flex-wrap: ${(props) => (props.wrap ? props.wrap : "no-wrap")};
    flex-direction: ${(props) => (props.fd ? props.fd : "row")};
`;
