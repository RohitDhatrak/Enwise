import { Link } from "react-router-dom";
import { FlexContainer, Container } from "../Shared";
import { HomeIcon, PlayListIcon, ProfileIcon } from "../../assets/svg";
import { BottomNavContainer } from "./style.bottomnav";

export function BottomNav() {
    return (
        <BottomNavContainer
            as="nav"
            position="fixed"
            bottom="0"
            justify="space-around"
            w="100vw"
            bgc="var(--bg-color)"
            color="var(--font-color-2)"
            p="0.3em 0em"
            bt="1px solid #3c3d3d"
        >
            <Link to="/">
                <FlexContainer
                    direction="column"
                    pt="0.4em"
                    align="center"
                    cursor="pointer"
                >
                    <HomeIcon color={"var(--icon-color)"} />
                    <Container fs="0.8rem" pt="0.4em">
                        Home
                    </Container>
                </FlexContainer>
            </Link>
            <Link to="/playlists">
                <FlexContainer
                    direction="column"
                    pt="0.4em"
                    align="center"
                    cursor="pointer"
                >
                    <PlayListIcon
                        color={"var(--icon-color)"}
                        className="scale-13"
                    />
                    <Container fs="0.8rem" pt="0.4em">
                        Playlists
                    </Container>
                </FlexContainer>
            </Link>
            <Link to="/profile">
                <FlexContainer
                    direction="column"
                    pt="0.4em"
                    align="center"
                    cursor="pointer"
                >
                    <ProfileIcon
                        color={"var(--icon-color)"}
                        className="scale-13"
                    />
                    <Container fs="0.8rem" pt="0.4em">
                        Profile
                    </Container>
                </FlexContainer>
            </Link>
        </BottomNavContainer>
    );
}
