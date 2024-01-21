import { useQuery } from '@tanstack/react-query';
import { getListPromo, getPagePromo, getDetailPromo, getListDetailPromo } from './index'
import { ListPromoParams, DetailPromoParams } from './types'

export const UseGetPagePromo = (lang: string) => {
    const controller = useQuery({ queryKey: ['getPagePromo', lang], queryFn: () => getPagePromo(lang) });

    return controller;
};

export const UseGetListPromo = (params: ListPromoParams, isEnabled: boolean) => {
    const controller = useQuery({ queryKey: ['getListPromo', params], queryFn: () => getListPromo(params), enabled: isEnabled });

    return controller;
};

export const UseGetListDetailPromo = (params: DetailPromoParams) => {
    const controller = useQuery({ queryKey: ['getListDetailPromo', params], queryFn: () => getListDetailPromo(params) });

    return controller;
};

export const UsetGetDetailPromo = (params: DetailPromoParams) => {
    const controller = useQuery({ queryKey: ['getDetailPromo', params], queryFn: () => getDetailPromo(params) });

    return controller;
};
