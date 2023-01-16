import React from 'react';
import Head from 'next/head';
import { AppInitialProps } from 'next/dist/shared/lib/utils';
import Navigation from './Navigation';

interface Props {
    Component: any;
    pageProps: any;
};

const startYear = 2023;
const year = (new Date()).getFullYear();
const copyright = year > startYear ? `${startYear}-${year}` : year;

const Layout = ({ Component, pageProps }: Props): JSX.Element => {
    return (
        <>
            <Head>
                <title>iMati.dev</title>
                <meta name="description" content="Full-stack developer with experience in React, Node.js, JavaScript, TypeScript and more. Check out my portfolio to see my latest projects and contact me for freelance work." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navigation />
            </header>

            <main>
                <Component {...pageProps} />
            </main>

            <footer>
                Copyright © {copyright}
            </footer>
        </>
    );
};

export default Layout;
