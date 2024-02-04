import 'asset/css/component.css'
import 'asset/css/main.css'
import 'asset/css/mobile.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "@/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from 'next/app'
// import "tw-elements/dist/css/tw-elements.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import AppLayout from '@/containers/Layouts/AppLayout'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnMount: false,
                refetchOnWindowFocus: false,
                retry: false,
            }
        }
    }))


    return (
        <>
            <QueryClientProvider client={queryClient}>



                <ReactQueryDevtools initialIsOpen={false} />

                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>




            </QueryClientProvider>
        </>
    );
}