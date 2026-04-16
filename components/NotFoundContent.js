'use client'

import { Helmet } from 'react-helmet-async'
import React from 'react'
import Link from 'next/link'
import { Button, Header } from 'flotiq-components-react'
import Layout from '../layouts/layout'

const NotFoundContent = () => (
    <Layout>
        <Helmet>
            <title>Page not found</title>
        </Helmet>
        <main className="flex flex-col h-screen justify-center items-center">
            <Header alignment="center" additionalClasses={['my-20', '!py-20']}>
                Page not found, sorry
            </Header>
            <div className="text-center my-20 py-20">
                <Link href="/">
                    <Button
                        variant="secondary"
                        label="Go back to index"
                    />
                </Link>
            </div>
        </main>
    </Layout>
)

export default NotFoundContent
