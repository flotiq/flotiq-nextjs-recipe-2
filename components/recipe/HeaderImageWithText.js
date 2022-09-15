import React from 'react';
import { Header } from 'flotiq-components-react';
import Image from 'next/image';
import FlotiqImage from '../../lib/FlotiqImage';

const HeaderImageWithText = ({
    recipe, headerText1, headerText2, headerText3,
}) => (
    <div className="relative">
        <div className="px-10 py-5 md:p-20 flex flex-col items-start justify-end
        w-7/12 h-full absolute bg-gradient-to-r from-primary to-transparent z-10"
        >
            <Header
                additionalClasses={['block text-white font-normal '
            + 'text-olive-green !text-2xl md:!text-6xl !p-0 mb-1 md:mb-3']}
            >
                {headerText1}
            </Header>
            <Header additionalClasses={['block text-white font-normal !text-2xl md:!text-6xl !p-0 mb-1 md:mb-3']}>
                {headerText2}
            </Header>
            <Header additionalClasses={['block text-white font-normal !text-2xl md:!text-6xl !p-0']}>
                {headerText3}
            </Header>
        </div>
        <div className="w-full">
            <Image
                src={FlotiqImage.getSrc(recipe.image?.[0], 0, 0)}
                width="5571"
                height="3735"
                alt={headerText1}
            />
        </div>
    </div>
)

export default HeaderImageWithText;
