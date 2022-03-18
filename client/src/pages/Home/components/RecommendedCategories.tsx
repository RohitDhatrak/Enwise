import { useNavigate } from "react-router-dom";
import { FlexContainer } from "../../../components/Shared";
import { Category, ButtonEvent } from "../../../types/types";
import { RecommendationsContainer } from "./style.recommendedCategories";

export function RecommendedCategories({
    categories,
    selectedCategory,
    setSelectedCategory,
}: {
    categories: Category[];
    selectedCategory: string;
    setSelectedCategory: Function;
}) {
    const navigate = useNavigate();
    const categoriesWithAll = [{ id: -1, name: "All" }, ...categories];

    function filterVideos(e: ButtonEvent) {
        const element = e.target as HTMLElement;
        if (element.innerText === "All") {
            setSelectedCategory("All");
            navigate("/");
        } else {
            setSelectedCategory(element.innerText);
            if (element.innerText.trim().length > 0) {
                navigate({
                    pathname: "/",
                    search: `query=${element.innerText}`,
                });
            }
        }
    }

    return (
        <RecommendationsContainer pl="1.3em" overflow="auto">
            {categoriesWithAll.map((category) => (
                <FlexContainer
                    as="button"
                    key={category.id}
                    align="center"
                    justify="center"
                    fs="1rem"
                    fw={600}
                    b="none"
                    p="0.4em 1em"
                    bgc={
                        selectedCategory === category.name
                            ? "var(--action-btn)"
                            : "var(--menu-hover-color)"
                    }
                    color={
                        selectedCategory === category.name
                            ? "var(--bg-color)"
                            : "var(--font-color)"
                    }
                    br="1em"
                    mt="1em"
                    mr="1em"
                    mb="0.5em"
                    cursor="pointer"
                    onClick={filterVideos}
                >
                    {category.name}
                </FlexContainer>
            ))}
        </RecommendationsContainer>
    );
}
