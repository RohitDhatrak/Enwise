import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";
import { Video } from "../../types/types";
import { useAppContext } from "../../context/AppContext";
import { RecommendedCategories } from "./components/RecommendedCategories";
import { stopWords } from "./stopWords";

export function Home() {
    const { videos } = useReducerContext();
    const { categories } = useAppContext();
    const { pathname, search } = useLocation();
    let filteredVideos: Video[] = [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (search && pathname === "/") {
        const query = search.split("=")[1].toLowerCase();

        let queries = query.split("%20");

        queries = queries.filter((query) => {
            return !stopWords.includes(query);
        });

        filteredVideos = videos.filter((video) => {
            for (const query of queries) {
                const result =
                    video.title
                        .toLowerCase()
                        .trim()
                        .includes(query.toLowerCase()) ||
                    video.creator
                        .toLowerCase()
                        .trim()
                        .includes(query.toLowerCase()) ||
                    video.category.includes(query);
                if (result) return true;
            }
            return false;
        });
    }

    return (
        <FlexContainer direction="column">
            <RecommendedCategories categories={categories} />
            <FlexContainer>
                {!search && <VideoGrid videos={[...videos].reverse()} />}
                {search && <VideoGrid videos={[...filteredVideos].reverse()} />}
            </FlexContainer>
        </FlexContainer>
    );
}
