import '@/styles/globals.css'
import '@/styles/app.scss'
import React from 'react';
import type { AppProps } from 'next/app';
import App from 'next/app';
import Layout from '@/components/_app';

class app extends App<AppProps> {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout Component={Component} pageProps={pageProps} />
        );
    }
}

export default app;
