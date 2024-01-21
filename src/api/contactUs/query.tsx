import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect } from "react";
import { ContactUspageParams, PostContactUsParams } from './types'
import { getPageContactUs } from './index'
import { postContactUs } from './apiBE';

export const useGetContactUs = (params: ContactUspageParams) => {
    const controller = useQuery({ queryKey: ['getContactUsDatas', params], queryFn: () => getPageContactUs(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Contact Us gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};

export const usePostContactUs = () => {
    const controller = useMutation({
        mutationFn: (params: PostContactUsParams) => postContactUs(params),
    });

    return controller;
};

