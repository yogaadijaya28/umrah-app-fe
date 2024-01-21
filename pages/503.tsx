import Link from 'next/link'
import Head from 'next/head'

export default function Custom503() {
    return (
        <>
            <Head>
                <title>Beranda - Toko Kacamata dan Softlens Online</title>
            </Head>

            <div className="content overflow-hidden">
                {/* START PAGE ERROR */}
                <div className="lg:h-screen sm:h-full w-full lg:py-32 sm:py-20 sm:px-15">
                    <img src="/assets/icons/ic-503.svg" alt="" className="m-auto lg:w-[250px] lg:h-[250px] sm:w-[160px] sm:h-[160px] object-cover" />
                    <div className="flex flex-col justify-center items-center lg:w-[400px] sm:w-full m-auto mt-5">
                        <p className="text-primary text-xl font-epilogue font-bold text-center">Maintenance Mode</p>
                        <p className="text-black lg:text-sm sm:text-xs lg:w-[400px] sm:w-3/4 font-epilogue font-normal text-center">The page you are looking for is currently under construction, temporarily unavailable. We will fix it soon</p>
                        <Link href="/" className="mt-5">
                            <button type='button' className="min-w-[180px] py-3 flex justify-center items-center text-sm font-epilogue font-bold uppercase text-white bg-primary focus:outline-none hover:text-white hover:bg-black focus:z-10 focus:ring-0 h-10 mx-1 sm:w-1/2 mb-4">
                                back to home
                            </button>
                        </Link>
                    </div>
                </div>
                {/* END PAGE ERROR */}
            </div>
        </>
    )
}