import { useLocation, useNavigate } from "react-router-dom";
import { VideoGridProps } from "./VideosGridProps.types";
import { Video } from "..";
import {
    VideoGridContainer,
    PageContainer,
    LoaderContainer,
} from "./style.videogrid";
import { Container, FlexContainer, Image } from "../Shared";
import { useReducerContext } from "../../context/ReducerContext";
import { useAppContext } from "../../context/AppContext";
import emptyBox from "../../assets/empty-box.png";
import { ActionButton } from "../../components";
import { LoaderSvg } from "../../assets/svg";

export function VideoGrid({ videos, playlistId, isLoading }: VideoGridProps) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { playlists, user } = useReducerContext();
    const { isUserDataFetched } = useAppContext();

    let pageTitle = "";
    let filledPlaylist = [];

    if (pathname === "/liked") pageTitle = "Liked";
    else if (pathname === "/history") pageTitle = "History";
    else if (pathname === "/watchlater") pageTitle = "Watch Later";
    else if (pathname === "/playlists") {
        pageTitle = "Playlists";
        filledPlaylist = playlists.filter(
            (playlist) => playlist.videoCount > 0
        );
    } else {
        if (playlistId) {
            const playlist = playlists.find(
                (playlist) => playlist.id === Number(playlistId)
            );
            if (playlist) pageTitle = playlist.title;
        }
    }

    if (
        (!isUserDataFetched && pathname !== "/") ||
        (pathname.includes("/playlist/") && isLoading)
    ) {
        return (
            <LoaderContainer h="80vh" w="100vw" justify="center" align="center">
                <LoaderSvg />
            </LoaderContainer>
        );
    }

    return (
        <PageContainer m="0 auto" w="100%" minH="100vh">
            {pathname !== "/" && (
                <FlexContainer
                    justify="center"
                    direction="column"
                    ml="1.5em"
                    mt="0.5em"
                    color="var(--font-color-2)"
                >
                    <Container fs="1.2rem">{pageTitle}</Container>
                    {pathname !== "/playlists" && (
                        <Container fs="0.9rem">
                            {`${videos.length} ${
                                videos.length === 1 ? "video" : "videos"
                            }`}
                        </Container>
                    )}
                    {pathname === "/playlists" && (
                        <Container fs="0.9rem">
                            {`${filledPlaylist.length} ${
                                filledPlaylist.length === 1
                                    ? "playlist"
                                    : "playlists"
                            }`}
                        </Container>
                    )}
                </FlexContainer>
            )}
            {!videos.length && pathname !== "/history" && (
                <FlexContainer
                    align="center"
                    justify="center"
                    h="70vh"
                    direction="column"
                    w="20em"
                    maxW="80vw"
                    m="0 auto"
                >
                    <Image src={emptyBox} alt="" w="5em" />
                    <Container mt="1em" textAlign="center">
                        Looks like there is nothing in here
                    </Container>
                    <ActionButton onClick={() => navigate("/")}>
                        Watch videos
                    </ActionButton>
                </FlexContainer>
            )}
            {!videos.length && pathname === "/history" && (
                <FlexContainer
                    align="center"
                    justify="center"
                    h="70vh"
                    direction="column"
                    w="20em"
                    maxW="80vw"
                    m="0 auto"
                >
                    <Image src={emptyBox} alt="" w="5em" />
                    {!user.saveHistory && (
                        <FlexContainer direction="column" align="center">
                            <Container mt="1em" textAlign="center">
                                You have disabled history tracking. You can
                                enable it in settings.
                            </Container>
                            <ActionButton onClick={() => navigate("/settings")}>
                                Go to Settings
                            </ActionButton>
                        </FlexContainer>
                    )}
                    {user.saveHistory && (
                        <FlexContainer direction="column" align="center">
                            <Container mt="1em" textAlign="center">
                                Looks like you haved watched anything yet
                            </Container>
                            <ActionButton onClick={() => navigate("/")}>
                                Start watching
                            </ActionButton>
                        </FlexContainer>
                    )}
                </FlexContainer>
            )}
            {!!videos.length && (
                <VideoGridContainer gap="1em" justify="space-around" p="1em">
                    {videos.map((video) => {
                        if (!("videoCount" in video) || video.videoCount > 0) {
                            return <Video key={video.id} video={video} />;
                        }
                        return null;
                    })}
                </VideoGridContainer>
            )}
        </PageContainer>
    );
}
