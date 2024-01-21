import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { PromoByStorePageParams } from './types'
import { getPromoByStorePage } from './index'

export const useGetPromoByStore = (params: PromoByStorePageParams) => {
    const controller = useQuery({ queryKey: ['getPromoByStoreData', params], queryFn: () => getPromoByStorePage(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Promo Page By Store gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};

