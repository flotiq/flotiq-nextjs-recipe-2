import React from 'react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Header } from 'flotiq-components-react';
import Image from 'next/image';

const headerText = 'All you can eat';

const PageHeader = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex justify-between h-auto flex-wrap md:flex-nowrap">
                        <div className="order-2 md:order-1 flex grow md:grow-0" style={{ minWidth: '100px' }}>
                            <div className="flex-shrink-0 flex grow md:grow-0 items-center justify-center">
                                <Link href="/">
                                    <div className="block w-[83px] md:w-[124px] w-auto h-8 md:h-12 relative">
                                        <Image
                                            src="/assets/recipe-logo.svg"
                                            alt="Logo"
                                            width={124}
                                            height={48}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="-ml-2 mr-2 flex items-center md:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                        hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                        <div className="order-3 md:order-2 hidden md:flex items-center justify-center w-full">
                            <Header additionalClasses={['!text-3xl font-semibold']}>
                                {headerText}
                            </Header>
                        </div>
                        <div className="order-1 md:order-3 flex items-center ">
                            <div className="flex-shrink-0">
                                <a
                                    href="mailto:hello@domain.com"
                                    className="relative inline-flex items-center px-4 py-2
                                    text-base md:text-lg font-regular hover:text-secondary"
                                >
                                    Say Hi!
                                </a>
                            </div>
                        </div>
                        <div className="order-3 md:hidden flex items-center
                        justify-center w-full md:w-auto py-5 md:py-0"
                        >
                            <h1 className="text-xl font-semibold">All you can eat</h1>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4 sm:px-6">
                            <p>Menu content here...</p>
                        </div>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
)

export default PageHeader;
