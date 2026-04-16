import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import RecipeTemplate from '../../../templates/RecipePost'
import replaceUndefinedWithNull from '../../../lib/sanitize'
import { getRecipe, getRecipeBySlug } from '../../../lib/recipe'

const getCachedRecipe = cache(async (slug) => getRecipeBySlug(slug))

export async function generateStaticParams() {
    const fetchAllRecipes = replaceUndefinedWithNull(await getRecipe(1, 1000))
    const allRecipes = fetchAllRecipes.data

    return allRecipes.map((recipe) => ({
        slug: recipe.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const recipeBySlug = await getCachedRecipe(slug)
    const recipe = recipeBySlug.data[0]

    if (!recipe) {
        return { title: 'Recipe' }
    }

    return {
        title: recipe.name,
        description: recipe.description,
    }
}

const Page = async ({ params }) => {
    const { slug } = await params

    const recipeBySlug = await getCachedRecipe(slug)
    const filtersRecipes = `{"slug":{"type":"notContains","filter":"${params.slug}"}}`
    const allRecipes = await getRecipe(1, 3, filtersRecipes)

    const recipeData = replaceUndefinedWithNull(recipeBySlug.data[0])

    if (!recipeData) {
        notFound()
    }

    const allRecipesData = {
        pageAll: replaceUndefinedWithNull(allRecipes.data),
    }

    return <RecipeTemplate recipe={recipeData} pageContext={allRecipesData} />
}

export default Page
