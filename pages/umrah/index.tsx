import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { NextPage } from 'next';

const PageUmrahContainer = dynamic(() => import('@/containers/PageUmrahContainer'), {
    ssr: false,
});

const Umrah: NextPage = () => {


    return (
        <>
            <Head>
            <title>Paket Umrah - DAL TOUR & TRAVEL</title>
            </Head>
            <PageUmrahContainer />
        </>
    )
}

export default Umrah

