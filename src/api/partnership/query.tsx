import { useQuery } from '@tanstack/react-query';
import { getPagePartnership, getListParter } from './index'

export const UseGetPagePartnership = (lang: string) => {
    const controller = useQuery({ queryKey: ['getPagePartnership', lang], queryFn: () => getPagePartnership(lang) });

    return controller;
};

export const UseGetListPartner = (lang: string) => {
    const controller = useQuery({ queryKey: ['getListParter', lang], queryFn: () => getListParter(lang) });

    return controller;
};