import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { HomepageParams, BrandParams, LearnParams } from './types'
import { getPageHomepage, getBrandListByCategoryName, getLearnListByCategoryName } from './index'

export const useGetHomePage = (params: HomepageParams) => {
    const controller = useQuery({ queryKey: ['getHompageData', params], queryFn: () => getPageHomepage(params) });

    return controller;
};

export const useGetBrandList = (params: BrandParams) => {
    const controller = useQuery({ queryKey: ['getHompageBrandList', params], queryFn: () => getBrandListByCategoryName(params) });

    return controller;
};


export const useGetLearnList = (params: LearnParams) => {
    const controller = useQuery({ queryKey: ['getHompageLearnList', params], queryFn: () => getLearnListByCategoryName(params) });

    return controller;
};

