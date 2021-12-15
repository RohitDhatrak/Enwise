import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";
import { Video } from "../../types/types";
import { getCategories } from "../../services/getUserData";
import { useAppContext } from "../../context/AppContext";
import { RecommendedCategories } from "./components/RecommendedCategories";
import { stopWords } from "./stopWords";

export function Home() {
    const { videos } = useReducerContext();
    const { categories, setCategories } = useAppContext();
    const { pathname, search } = useLocation();
    let filteredVideos: Video[] = [];

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

    async function getRecommendedCategories(n: number) {
        let categoriesArray = await getCategories();
        if (n >= categoriesArray.length) {
            return categoriesArray;
        } else {
            const shuffledCategories = categoriesArray.sort(
                () => 0.5 - Math.random()
            );
            return shuffledCategories.slice(0, n);
        }
    }

    useEffect(() => {
        (async function () {
            const categoriesArray = await getRecommendedCategories(6);
            setCategories(categoriesArray);
        })();
    }, []);

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
