import { useQuery } from '@tanstack/react-query';
import { getPageCareers, getListCareer, getDetailCareer, getListDetailCareer } from './index'
import { PageCareersParams, ListCareersParams, DetailCareerParams } from './types'

export const UseGetPageCareer = (params: PageCareersParams) => {
    const controller = useQuery({ queryKey: ['getPageCareers', params], queryFn: () => getPageCareers(params) });

    return controller;
};

export const UseGetListCareer = (params: ListCareersParams, isEnabled: boolean) => {
    const controller = useQuery({ queryKey: ['getListCareer', params], queryFn: () => getListCareer(params), enabled: isEnabled });

    return controller;
};

export const UseGetListDetailCareer = (params: DetailCareerParams) => {
    const controller = useQuery({ queryKey: ['getListDetailCareer', params], queryFn: () => getListDetailCareer(params) });

    return controller;
};

export const UsetGetDetailCareer = (params: DetailCareerParams) => {
    const controller = useQuery({ queryKey: ['getDetailCareer', params], queryFn: () => getDetailCareer(params) });

    return controller;
};


