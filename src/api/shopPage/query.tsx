import { useQuery } from '@tanstack/react-query';
import { getPageShop } from './index'
import { CustomProductsParams } from '../customProductDetail/types';


export const useGetAllProducts = (params: CustomProductsParams) => {
    const controller = useQuery({ queryKey: ['getAllProducts', params], queryFn: () => getPageShop(params) });


    return controller;
};

