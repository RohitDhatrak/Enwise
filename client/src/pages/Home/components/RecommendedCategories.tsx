import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlexContainer } from "../../../components/Shared";
import { Category, ButtonEvent } from "../../../types/types";
import { RecommendationsContainer } from "./style.recommendedCategories";

export function RecommendedCategories({
    categories,
}: {
    categories: Category[];
}) {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");
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
                    key={category.id}
                    align="center"
                    p="0.4em 1em"
                    bgc={
                        selectedCategory === category.name
                            ? "var(--menu-hover-color)"
                            : "var(--search-field-color)"
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
