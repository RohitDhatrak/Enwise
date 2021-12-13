import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VideoGrid } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";
import { Video } from "../../types/types";
import { getCategories } from "../../services/getUserData";
import { useAppContext } from "../../context/AppContext";
import { RecommendedCategories } from "./components/RecommendedCategories";

export function Home() {
    const { videos } = useReducerContext();
    const { categories, setCategories } = useAppContext();
    const { pathname, search } = useLocation();
    let filteredVideos: Video[] = [];

    if (search && pathname === "/") {
        const query = search.split("=")[1];

        filteredVideos = videos.filter(
            (video) =>
                video.title
                    .toLowerCase()
                    .trim()
                    .includes(query.toLocaleLowerCase()) ||
                video.creator
                    .toLowerCase()
                    .trim()
                    .includes(query.toLocaleLowerCase()) ||
                video.category.includes(query)
        );
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
