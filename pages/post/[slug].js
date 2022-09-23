import React from 'react';
import RecipeTemplate from '../../templates/RecipePost';
import { getRecipeAll, getRecipeBySlug, getRecipePrevious, getRecipeNext } from '../../lib/recipe';

const Home = ({ post, pageContext }) => (
    <RecipeTemplate
        post={post}
        pageContext={pageContext}
    />
)

export async function getStaticProps({ params }) {
    const postBySlug = await getRecipeBySlug(params.slug);
    const createdAt = postBySlug?.data[0]?.internal.createdAt;
    const filtersRecipes = `{"slug":{"type":"notContains","filter":"${params.slug}"}}`;
    const previousPost = await getRecipePrevious(createdAt || null);
    const previousPostSlug = (previousPost && previousPost.data && previousPost.data[0])
        ? previousPost.data[0].slug : null;
    const nextPost = await getRecipeNext(createdAt || null);
    const nextPostSlug = (nextPost && nextPost.data && nextPost.data[0]) ? nextPost.data[0].slug : null;
    const allPost = await getRecipeAll(1, 3, filtersRecipes);
    return {
        props: {
            post: postBySlug.data[0],
            pageContext: {
                previous: previousPostSlug,
                next: nextPostSlug,
                pageAll: allPost.data,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = await getRecipeAll(1, 10000);
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
