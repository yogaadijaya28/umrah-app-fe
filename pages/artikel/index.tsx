import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { NextPage } from 'next';

const PageArtikelContainer = dynamic(() => import('@/containers/PageArtikelContainer'), {
    ssr: false,
});

const Umrah: NextPage = () => {


    return (
        <>
            <Head>
            <title>Artikel - DAL TOUR & TRAVEL</title>
            </Head>
            <PageArtikelContainer />
        </>
    )
}

export default Umrah

