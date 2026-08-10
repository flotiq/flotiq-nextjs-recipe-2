import { Flotiq } from '@flotiq/flotiq-api-sdk'

const apiKey = process.env.FLOTIQ_API_KEY

export async function getRecipe(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date'
) {
    const api = new Flotiq(apiKey)
    return api.content.recipe.list({
        page,
        limit,
        filters,
        order_by: orderBy,
        order_direction: direction,
        hydrate: 1,
    })
}

export async function getRecipeBySlug(slug) {
    const api = new Flotiq(apiKey)
    return api.content.recipe.list({
        filters: {
            slug: {
                type: 'contains',
                filter: slug,
            },
        },
        page: 1,
        limit: 1,
        hydrate: 1,
    })
}
