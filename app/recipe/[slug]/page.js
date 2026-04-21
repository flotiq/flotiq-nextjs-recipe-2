import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import RecipeTemplate from '../../../templates/RecipePost'
import replaceUndefinedWithNull from '../../../lib/sanitize'
import { getRecipe, getRecipeBySlug } from '../../../lib/recipe'

const getCachedRecipe = cache(
    async (slug) =>
        replaceUndefinedWithNull(await getRecipeBySlug(slug)).data[0]
)

export async function generateStaticParams() {
    const fetchAllRecipes = replaceUndefinedWithNull(await getRecipe(1, 1000))
    const allRecipes = fetchAllRecipes.data

    return allRecipes.map((recipe) => ({
        slug: recipe.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const recipe = await getCachedRecipe(slug)

    if (!recipe) {
        return { title: 'Recipe not found' }
    }

    return {
        title: recipe.name,
        description: recipe.description,
    }
}

const Page = async ({ params }) => {
    const { slug } = await params
    const recipeData = await getCachedRecipe(slug)

    if (!recipeData) {
        notFound()
    }

    const filtersRecipes = `{"slug":{"type":"notContains","filter":"${slug}"}}`
    const allRecipes = await getRecipe(1, 3, filtersRecipes)

    const allRecipesData = {
        pageAll: replaceUndefinedWithNull(allRecipes.data),
    }

    return <RecipeTemplate recipe={recipeData} pageContext={allRecipesData} />
}

export default Page
