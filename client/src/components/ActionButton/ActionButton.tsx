import { Container } from "../Shared";

type ActionButtonPropTypes = {
    children: string;
    onClickFunction: React.MouseEventHandler;
};

export function ActionButton({
    children,
    onClickFunction,
}: ActionButtonPropTypes) {
    return (
        <Container
            as="button"
            onClick={onClickFunction}
            m="1em"
            w="100%"
            fs="1rem"
            h="2.5em"
            br="0.4em"
            b="none"
            bgc="var(--action-btn)"
            fw={600}
        >
            {children}
        </Container>
    );
}
