import { useQuery } from '@tanstack/react-query';
import { getProductRecomendations, getDetailProduct, getProductAvaible } from './index'
import { detailProductParams, productAvaibleStoreParams } from './types'

export const UseGetProductsRecomendation = () => {
    const controller = useQuery({ queryKey: ['getProductRecomendations'], queryFn: () => getProductRecomendations() });

    return controller;
};

export const UsetGetDetailProduct = (params: detailProductParams) => {
    const controller = useQuery({ queryKey: ['getDetailProduct', params], queryFn: () => getDetailProduct(params) });

    return controller;
};

export const UsetGetProductAvaible = (params: productAvaibleStoreParams) => {
    const controller = useQuery({ queryKey: ['getProductAvaible', params], queryFn: () => getProductAvaible(params), enabled: false });

    return controller;
};
