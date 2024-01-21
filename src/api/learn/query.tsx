import { useQuery } from '@tanstack/react-query';
import { getListLearn, getPageLearn, getDetailLearn } from './index'
import { ListLearnParams, DetailLearnParams } from './types'

export const UseGetPageLearn = (lang: string) => {
    const controller = useQuery({ queryKey: ['getPageLearn', lang], queryFn: () => getPageLearn(lang) });

    return controller;
};

export const UseGetListLearn = (params: ListLearnParams) => {
    const controller = useQuery({ queryKey: ['getListLearn', params], queryFn: () => getListLearn(params) });

    return controller;
};

export const UseGetDetailLearn = (params: DetailLearnParams, enabledStatus: boolean) => {
    const controller = useQuery({ queryKey: ['getDetailLearn', params], queryFn: () => getDetailLearn(params), enabled: enabledStatus });

    return controller;
};