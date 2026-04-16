'use client'

import React from 'react'
import { Announcement } from 'flotiq-components-react'
import Pagination from 'flotiq-components-react/dist/components/Pagination/Pagination'
import RecipeFeaturedCard from '../components/RecipeFeaturedCard'
import RecipeCards from '../sections/RecipeCards'
import Layout from '../layouts/layout'
// import CategoriesChoiceBar from '../components/CategoriesChoiceBar';

// const categoryTabs = [
//     { name: 'Breakfast', href: '#', current: true },
//     { name: 'Dinner', href: '#', current: false },
//     { name: 'Dessert', href: '#', current: false },
//     { name: 'Lunch', href: '#', current: false },
//     { name: 'Snack', href: '#', current: false },
//     { name: 'Vegan', href: '#', current: false },
// ];

const PageContent = ({ recipes, pageContext }) => (
    <Layout additionalClass={['bg-light-gray']}>
        <Announcement
            content={
                <span className="leading-normal">
                    A blog full of{' '}
                    <span className="text-secondary font-medium">
                        easy to make recipes
                    </span>
                    <br /> that take the stress out of cooking.
                </span>
            }
            rounded="none"
            textAlignment="center"
            variant="transparent"
            additionalClasses={[
                'max-w-3xl mx-auto mt-10 !text-3xl md:!text-4xl !font-light !px-4',
            ]}
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

        <Pagination
            page={pageContext.currentPage}
            numOfPages={pageContext.numPages}
            rounded="md"
        />
    </Layout>
)

export default PageContent
