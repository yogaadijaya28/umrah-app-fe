import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { NextPage } from 'next';

const PageHajiContainer = dynamic(() => import('@/containers/PageHajiContainer'), {
    ssr: false,
});

const Umrah: NextPage = () => {


    return (
        <>
            <Head>
            <title>Paket Haji - DAL TOUR & TRAVEL</title>
            </Head>
            <PageHajiContainer />
        </>
    )
}

export default Umrah

