import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import PageHeader from '../components/Header';

const Layout = ({
    children, additionalClass = [], title, description,
}) => (
    <main className={['font-poppins', ...additionalClass].join(' ')}>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={title} key="title" />
            <meta name="description" content={description} />
        </Head>
        <PageHeader />
        {children}
        <Footer />
    </main>
)

export default Layout;
