import { useMutation, useQuery } from '@tanstack/react-query';
import { postClientParams } from './types'
import { getClient, postClient} from './index'

export const usePostClient = () => {
    const controller = useMutation({
        mutationFn: (params: postClientParams) => postClient(params),
    });

    return controller;
};


export const useGetClient = () => {
    const controller = useQuery({ queryKey: ['GetClientDatas'], queryFn: () => getClient() });


    return controller;
};
