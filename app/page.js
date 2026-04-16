import replaceUndefinedWithNull from '../lib/sanitize'
import { getRecipe } from '../lib/recipe'
import config from '../lib/config'
import PageContent from '../components/PageContent'

export const metadata = {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
}

const Page = async () => {
    const fetchRecipe = await getRecipe(1, config.recipe.recipesPerPage)
    const recipesData = replaceUndefinedWithNull(fetchRecipe.data)
    const pageContext = {
        currentPage: fetchRecipe.current_page,
        numPages: fetchRecipe.total_pages,
    }

    return <PageContent recipes={recipesData} pageContext={pageContext} />
}

export default Page
