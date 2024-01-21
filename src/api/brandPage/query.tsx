import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { BrandpageParams } from './types'
import { getPageBrands } from './index'
import { getStoreBrand } from '../findYourStore/StoreBrand';
import { OutletListParams } from '../findYourStore/StoreBrand/types';

export const useGetBrands = (params: BrandpageParams) => {
    const controller = useQuery({ queryKey: ['getPageBrandDatas', params], queryFn: () => getPageBrands(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Brands gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};


export const useGetAllBrands = (params: OutletListParams) => {
    const controller = useQuery({ queryKey: ['getAllBrandDatas', params], queryFn: () => getStoreBrand(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Brands gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};