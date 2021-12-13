import { Container } from "../../../components/Shared";
import { Category } from "../../../types/types";

export function RecommendedCategories({
    categories,
}: {
    categories: Category[];
}) {
    return (
        <Container ml="20em">
            {categories.map((category) => (
                <Container key={category.id} display="inline">
                    {category.name}
                </Container>
            ))}
        </Container>
    );
}
