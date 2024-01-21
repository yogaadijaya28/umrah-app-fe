import { useQuery } from '@tanstack/react-query';
import { getDetailEduProject } from './index'
import { DetailEduProjectParams } from './types';



// export const UseGetDetailHearingAid = (params: DetailHearingAidParams, enabledStatus: boolean) => {
//     const controller = useQuery({ queryKey: ['getDetailHearingAid', params], queryFn: () => getDetailHearingAid(params), enabled: enabledStatus });

//     return controller;
// };



export const UseGetEduProject = (params: DetailEduProjectParams) => {
    const controller = useQuery({ queryKey: ['getEduProject', params], queryFn: () => getDetailEduProject(params) });


    return controller;
};
