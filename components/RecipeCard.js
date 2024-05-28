import React from 'react';
import Link from 'next/link';
import { Card } from 'flotiq-components-react';
import Image from 'next/image';

const CustomRecipeCard = ({
    cookingTime, servings, name, image,
    //  tags,
    slug,
}) => (
    <Card
        bordered={false}
        additionalClasses={['mb-4 cursor-pointer basis-full md:basis-1/2 lg:basis-1/3 px-2 !bg-transparent']}
    >
        <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
            <a href="/#">
                <Image
                    src={image}
                    alt={name}
                    width="1920"
                    height="1280"
                    objectFit="cover"
                    className="w-full"
                    layout="responsive"
                />
            </a>
        </Link>
        <Card.Body
            additionalClasses={[
                'flex flex-col items-start justify-between order-2 lg:order-1 px-5 pt-10 pb-2 border-b-4 bg-white',
            ]}
        >
            <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
                <a href="/#">
                    <div className="flex flex-wrap justify-start text-xs font-light space-x-5 pb-3">
                        <p className="px-4 py-2 bg-light-gray">
                            Time:
                            {' '}
                            <span className="font-semibold text-sm">{cookingTime}</span>
                        </p>
                        <p className="px-4 py-2 bg-light-gray">
                            Portions:
                            {' '}
                            <span className="font-semibold text-sm">{servings}</span>
                        </p>
                    </div>
                    <Card.Title additionalClasses={['font-normal']}>
                        {name}
                    </Card.Title>
                </a>
            </Link>
            {/* Uncomment this to add tags to your recipes */}
            {/* <div className="flex flex-wrap justify-start text-sm font-light mt-5"> */}
            {/*    {tags && tags.map((tag) => ( */}
            {/*        <a */}
            {/*            href="/" */}
            {/*            className="mr-5 my-1 py-2 inline-flex items-center justify-center */}
            {/*            rounded-md underline text-xs font-light hover:text-secondary" */}
            {/*        > */}
            {/*            {tag} */}
            {/*        </a> */}
            {/*    ))} */}
            {/* </div> */}
        </Card.Body>
    </Card>
)

export default CustomRecipeCard;
