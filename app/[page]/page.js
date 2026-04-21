import { notFound } from 'next/navigation'
import replaceUndefinedWithNull from '../../lib/sanitize'
import { getRecipe } from '../../lib/recipe'
import config from '../../lib/config'
import PageContent from '../../components/PageContent'

export const metadata = {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
}

export async function generateStaticParams() {
    const fetcher = replaceUndefinedWithNull(
        await getRecipe(1, config.recipe.recipesPerPage)
    )
    const paths = []

    for (let i = 0; i < fetcher.total_pages; i += 1) {
        paths.push({ page: `${i + 1}` })
    }
    return paths
}

const Page = async ({ params }) => {
    const { page } = await params
    const pageNum = parseInt(page, 10)

    if (isNaN(pageNum) || pageNum < 1 || String(pageNum) !== page) {
        notFound()
    }
    const fetchRecipe = await getRecipe(pageNum, config.recipe.recipesPerPage)

    const recipesData = replaceUndefinedWithNull(fetchRecipe.data)
    const pageContext = {
        currentPage: fetchRecipe.current_page,
        numPages: fetchRecipe.total_pages,
    }

    if (pageNum > pageContext.numPages) {
        notFound()
    }

    return <PageContent recipes={recipesData} pageContext={pageContext} />
}

export default Page
