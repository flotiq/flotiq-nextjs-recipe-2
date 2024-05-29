import Pagination from 'flotiq-components-react/dist/components/Pagination/Pagination';
import React from 'react';
import { Announcement } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import RecipeCards from '../sections/RecipeCards';
import config from '../lib/config';
import RecipeFeaturedCard from '../components/RecipeFeaturedCard';
// import CategoriesChoiceBar from '../components/CategoriesChoiceBar';
import { getRecipe } from '../lib/recipe'
import replaceUndefinedWithNull from '../lib/sanitize'

const Home = ({ data, pageContext }) => {
    const recipes = data;
    // const categoryTabs = [
    //     { name: 'Breakfast', href: '#', current: true },
    //     { name: 'Dinner', href: '#', current: false },
    //     { name: 'Dessert', href: '#', current: false },
    //     { name: 'Lunch', href: '#', current: false },
    //     { name: 'Snack', href: '#', current: false },
    //     { name: 'Vegan', href: '#', current: false },
    // ];
    return (
        <Layout
            title={config.siteMetadata.title}
            description={config.siteMetadata.description}
            additionalClass={['bg-light-gray']}
        >
            <Announcement
                content={(
                    <span className="leading-normal">
                        A blog full of
                        {' '}
                        <span className="text-secondary font-medium">easy to make recipes</span>
                        <br />
                        {' '}
                        that take the stress out of cooking.
                    </span>
                )}
                rounded="none"
                textAlignment="center"
                variant="transparent"
                additionalClasses={['max-w-3xl mx-auto mt-10 !text-3xl md:!text-4xl !font-light !px-4']}
            />
            {/* Uncomment this to add categories to your recipes */}
            {/* <CategoriesChoiceBar additionalClass={['my-5']} categoryTabs={categoryTabs} /> */}
            <RecipeFeaturedCard
                title={recipes[0].name}
                excerpt={recipes[0].description}
                tags={['#dinner', '#vegan', '#lunch', '#glutenfree']}
                preparationTime={recipes[0].cookingTime}
                portions={recipes[0].servings}
                image={recipes[0].image[0]}
                imageAlt={recipes[0].name}
                slug={recipes[0].slug}
            />
            <RecipeCards recipes={recipes} headerText="Newest recipes" />

            <Pagination page={pageContext.currentPage} numOfPages={pageContext.numPages} rounded="md" />

        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const fetchPost = replaceUndefinedWithNull(await getRecipe(params.page, config.blog.postPerPage));

    return {
        props: {
            data: replaceUndefinedWithNull(fetchPost.data),
            pageContext: {
                currentPage: fetchPost.current_page,
                numPages: fetchPost.total_pages,
            },
        },
    };
}

export async function getStaticPaths() {
    const fetcher = replaceUndefinedWithNull(await getRecipe(1, config.blog.postPerPage))
    const paths = [];

    for (let i = 0; i < fetcher.total_pages; i += 1) {
        paths.push({
            params: { page: `${i + 1}` },
        });
    }
    return {
        paths,
        fallback: false,
    };
}
export default Home;
