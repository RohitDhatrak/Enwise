import { Container } from "../Shared";

type ActionButtonPropTypes = {
    children: string;
    onClick?: React.MouseEventHandler;
    width?: string;
};

export function ActionButton({
    children,
    onClick,
    width = "100%",
}: ActionButtonPropTypes) {
    return (
        <Container
            as="button"
            onClick={onClick}
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
