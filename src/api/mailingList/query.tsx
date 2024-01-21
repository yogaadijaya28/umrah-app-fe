import { useMutation } from '@tanstack/react-query';
import { postMailingList } from './index'
import { MailingParams } from './types'

export const usePostMailingList = () => {
    const controller = useMutation({
        mutationFn: (params: MailingParams) => postMailingList(params),
    });

    return controller;
};