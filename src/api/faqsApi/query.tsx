import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { FaqsParams } from './types'
import { getPageFaqs } from './index'

export const useGetFaqs = (params: FaqsParams) => {
    const controller = useQuery({ queryKey: ['getFaqDatas', params], queryFn: () => getPageFaqs(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Faqs gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};
