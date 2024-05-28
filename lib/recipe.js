import { FlotiqApi } from '../flotiqApi/index'

const apiKey = process.env.FLOTIQ_API_KEY;

export async function getRecipe(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date',
) {
    const api = new FlotiqApi(apiKey)
    return api.RecipeAPI.list({
        page,
        limit,
        filters,
        order_by: orderBy,
        order_direction: direction,
    })
}

export async function getRecipeBySlug(slug) {
    const filters = `{"slug":{"type":"contains","filter":"${slug}"}}`;
    const api = new FlotiqApi(apiKey);
    return api.RecipeAPI.list({ filters, page: 1, limit: 1 });
}