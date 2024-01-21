import { useQuery } from '@tanstack/react-query';
import { getListService, getPageServices, getDetailService } from './index'
import { ListServicesParams, DetailServicesParams } from './types'

export const UseGetPageService = (lang: string) => {
    const controller = useQuery({ queryKey: ['getPageServices', lang], queryFn: () => getPageServices(lang) });

    return controller;
};

export const UseGetListService = (params: ListServicesParams) => {
    const controller = useQuery({ queryKey: ['getListService', params], queryFn: () => getListService(params) });

    return controller;
};

export const UseGetDetailService = (params: DetailServicesParams) => {
    const controller = useQuery({ queryKey: ['getDetailService', params], queryFn: () => getDetailService(params) });

    return controller;
};