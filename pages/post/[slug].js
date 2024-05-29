import React from 'react';
import RecipeTemplate from '../../templates/RecipePost';
import { getRecipe, getRecipeBySlug } from '../../lib/recipe';
import replaceUndefinedWithNull from '../../lib/sanitize';

const Home = ({ post, pageContext }) => (
    <RecipeTemplate
        post={post}
        pageContext={pageContext}
    />
)

export async function getStaticProps({ params }) {
    const postBySlug = replaceUndefinedWithNull(await getRecipeBySlug(params.slug));
    const filtersRecipes = `{"slug":{"type":"notContains","filter":"${params.slug}"}}`;
    const allPost = replaceUndefinedWithNull(await getRecipe(1, 3, filtersRecipes));
    return {
        props: {
            post: replaceUndefinedWithNull(postBySlug.data[0]),
            pageContext: {
                pageAll: allPost.data,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = replaceUndefinedWithNull(await getRecipe(1, 10000));
    const postData = posts.data;
    return {
        paths: postData.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
}

export default Home;
