import { Link, useNavigate } from "react-router-dom";
import { SettingsIcon, SearchIcon } from "../../assets/svg";
import { FlexContainer, Image } from "../Shared";
import {
    HeaderContainer,
    ProfileIconContainer,
    SearchContainer,
    Logo,
} from "./style.header";
import logo from "../../assets/logo.png";
import { useAppContext } from "../../context/AppContext";
import { InputEvent } from "../../types/types";

export function Header() {
    const { searchQuery, setSearchQuery } = useAppContext();
    const navigate = useNavigate();

    function searchVideos() {
        if (searchQuery.trim().length > 0) {
            navigate({
                pathname: "/",
                search: `query=${searchQuery.trim()}`,
            });
        }
    }

    return (
        <HeaderContainer
            as="header"
            justify="space-between"
            align="center"
            p="0.5em 1.2em"
            h="5em"
            position="sticky"
            top="0"
            bgc="var(--nav-color)"
            zIndex="var(--z-index-2)"
        >
            <Link to="/">
                <FlexContainer align="center">
                    <Image src={logo} alt="" mr="1em" w="3em" />
                    <Logo fs="1.6rem" fw={600}>
                        Enwise
                    </Logo>
                </FlexContainer>
            </Link>

            <FlexContainer>
                <SearchContainer
                    bgc="var(--search-field-color)"
                    b="1px solid var(--border-color)"
                    h="3em"
                    br="1em 0 0 1em"
                    p="1em"
                    placeholder="Search for title or creator."
                    color="#fff"
                    value={searchQuery}
                    onChange={(e: InputEvent) => setSearchQuery(e.target.value)}
                    onKeyPress={(e: KeyboardEvent) => {
                        if (e.key === "Enter") searchVideos();
                    }}
                />
                <FlexContainer
                    as="button"
                    bgc="transparent"
                    b="1px solid var(--border-color)"
                    w="4em"
                    br="0 1em 1em 0"
                    align="center"
                    justify="center"
                    cursor="pointer"
                    onClick={searchVideos}
                >
                    <SearchIcon
                        color={"var(--icon-color)"}
                        className="scale-15"
                    ></SearchIcon>
                </FlexContainer>
            </FlexContainer>

            <Link to="/settings">
                <ProfileIconContainer mr="1em" br="50%" cursor="pointer">
                    <SettingsIcon
                        color={"var(--icon-color)"}
                        className="scale-15"
                    />
                </ProfileIconContainer>
            </Link>
        </HeaderContainer>
    );
}
