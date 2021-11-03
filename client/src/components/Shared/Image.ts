import styled, { css } from "styled-components";

type ImageProps = {
    w?: string;
};

export const Image = styled.img<ImageProps>`
    ${(props) =>
        props.w &&
        css`
            width: ${() => props.w};
        `}
`;
