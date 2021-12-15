import { Container } from "../Shared";

type ActionButtonPropTypes = {
    children: string;
    onClickFunction?: React.MouseEventHandler;
    width?: string;
};

export function ActionButton({
    children,
    onClickFunction,
    width = "100%",
}: ActionButtonPropTypes) {
    return (
        <Container
            as="button"
            onClick={onClickFunction}
            w={width}
            m="1em"
            fs="1rem"
            h="2.5em"
            br="0.4em"
            b="none"
            bgc="var(--action-btn)"
            fw={600}
            cursor="pointer"
        >
            {children}
        </Container>
    );
}
