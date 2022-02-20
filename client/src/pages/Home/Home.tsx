import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { VideoGrid } from "../../components";
import { FlexContainer, Image, Container } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";
import { Video } from "../../types/types";
import { useAppContext } from "../../context/AppContext";
import { RecommendedCategories } from "./components/RecommendedCategories";
import { searchVideos } from "../../services/getVideos";
import { LoaderSvg } from "../../assets/svg";
import { LoaderContainer, PageContainer } from "./style.home";
import emptyBox from "../../assets/empty-box.png";

export function Home() {
    const { videos } = useReducerContext();
    const { categories } = useAppContext();
    const { search } = useLocation();
    const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    async function getSearchResults() {
        try {
            setLoading(true);
            const query = decodeURIComponent(search.split("=")[1]);
            const searchResults = await searchVideos(query);
            setFilteredVideos(searchResults);
        } catch (err) {}
        setLoading(false);
    }

    useEffect(() => {
        if (search.length > 0) getSearchResults();
    }, [search]);

    if (loading) {
        return (
            <LoaderContainer h="80vh" w="100vw" justify="center" align="center">
                <LoaderSvg />
            </LoaderContainer>
        );
    }

    return (
        <FlexContainer direction="column">
            <RecommendedCategories categories={categories} />
            <FlexContainer>
                {!search && <VideoGrid videos={[...videos].reverse()} />}
                {search && filteredVideos.length > 0 && (
                    <VideoGrid videos={[...filteredVideos].reverse()} />
                )}
                {search && filteredVideos.length === 0 && (
                    <PageContainer>
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
                                No videos found
                            </Container>
                        </FlexContainer>
                    </PageContainer>
                )}
            </FlexContainer>
        </FlexContainer>
    );
}
