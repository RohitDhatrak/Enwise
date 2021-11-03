import styled from "styled-components";
import { ContainerCommonProps, CommonContainer } from "./CommonContainer";

type ContainerProps = ContainerCommonProps & {
    display?: "inline" | "inline-block";
};

export const Container = styled(CommonContainer)<ContainerProps>`
    display: ${(props) => (props.display ? props.display : "block")};
`;
