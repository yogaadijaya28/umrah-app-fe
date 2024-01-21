import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { NextPage } from 'next';

const PageDaftarContainer = dynamic(() => import('@/containers/PageDaftarContainer'), {
    ssr: false,
});

const Daftar: NextPage = () => {


    return (
        <>
            <Head>
            <title>Beranda - DAL TOUR & TRAVEL</title>
            </Head>
            <PageDaftarContainer />
        </>
    )
}

export default Daftar

