import React from 'react';
import { Header } from 'flotiq-components-react';
import RecipeCard from '../components/RecipeCard';
import FlotiqImage from '../lib/FlotiqImage';

const RecipeCards = ({ recipes, headerText }) => (
    <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
        <Header additionalClasses={['basis-1 mb-10 !text-5xl !font-medium']}>
            {headerText}
        </Header>
        <div className="flex flex-wrap justify-start">
            {recipes.map((item) => (

                <RecipeCard
                    cookingTime={item.cookingTime}
                    servings={item.servings}
                    key={item.id}
                    image={FlotiqImage.getSrc(item.image[0], 0, 0)}
                    name={item.name}
                    slug={item.slug}
                    tags={['#dinner', '#vegan', '#lunch', '#glutenfree']}
                />
            ))}
        </div>
    </div>
)

export default RecipeCards;
