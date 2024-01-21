import { useQuery } from '@tanstack/react-query';
import { HederMarketParams, IconMarketplaceParams } from './types'
import { getHeaderMarketplace, getIconMarketplace } from './index'

export const useGetHeaderMarketplace = (params: HederMarketParams) => {
    const controller = useQuery({ queryKey: ['getHeaderMarketPlace', params], queryFn: () => getHeaderMarketplace(params) });


    return controller;
};



export const useGetIconMarketplace = (params: IconMarketplaceParams) => {
    const controller = useQuery({ queryKey: ['getIconMarketPlace', params], queryFn: () => getIconMarketplace(params) });


    return controller;
};

