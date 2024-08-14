import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const RecipeBackButton = ({ additionalClass, backButtonText }) => (
    <div className={[...additionalClass].join(' ')}>
        <Link
            href="/"
            className={[
                'border-transparent pt-12 pb-5 font-medium flex',
                'items-center font-sora font-semibold text-sm md:text-base uppercase'
            ].join(' ')}
        >
            <ArrowLeftIcon className="mr-3 h-5 w-5 text-primary" />
            {backButtonText}
        </Link>
    </div>
)

export default RecipeBackButton;
