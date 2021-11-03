import styled, { css } from "styled-components";
export type ContainerCommonProps = {
    h?: string;
    w?: string;
    p?: string;
    pt?: string;
    m?: string | "auto";
    mb?: string;
    minH?: string;
    fw?: number;
    fs?: string;
    position?: "sticky" | "fixed";
    top?: number | string;
    bottom?: number | string;
    bgc?: string;
    bt?: string;
    cursor?: "pointer";
};

export const CommonContainer = styled.div<ContainerCommonProps>`
    height: ${(props) => (props.h ? props.h : "auto")};
    width: ${(props) => (props.w ? props.w : "auto")};
    padding: ${(props) => (props.p ? props.p : "initial")};
    padding-top: ${(props) => (props.pt ? props.pt : "initial")};
    margin: ${(props) => (props.m ? props.m : "initial")};
    font-weight: ${(props) => (props.fw ? props.fw : 400)};
    font-size: ${(props) => (props.fs ? props.fs : "1rem")};
    ${(props) =>
        props.position &&
        css`
            position: ${() => props.position};
        `}
    ${(props) =>
        props.mb &&
        css`
            margin-bottom: ${() => props.mb};
        `}
    ${(props) =>
        props.bt&&
        css`
            border-top: ${() => props.bt};
    `}
    ${(props) =>
        props.bgc &&
        css`
            background-color: ${() => props.bgc};
        `}
    ${(props) =>
        props.top &&
        css`
            top: ${() => props.top};
        `}
    ${(props) =>
        props.bottom &&
        css`
            bottom: ${() => props.bottom};
        `}
    ${(props) =>
        props.minH &&
        css`
            min-height: ${() => props.minH};
        `}
    ${(props) =>
        props.cursor&&
        css`
            cursor: ${() => props.cursor};
        `}
`;
