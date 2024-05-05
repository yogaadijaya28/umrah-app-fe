import { useMutation, useQuery } from '@tanstack/react-query';
import { postClientParams, tesPostClientParams } from './types'
import { getClient, postClient} from './index'

export const usePostClient = () => {
    const controller = useMutation({
        mutationFn: (params: tesPostClientParams) => postClient(params),
    });

    return controller;
};


export const useGetClient = () => {
    const controller = useQuery({ queryKey: ['GetClientDatas'], queryFn: () => getClient() });


    return controller;
};
