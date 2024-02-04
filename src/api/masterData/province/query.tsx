import { useQuery } from '@tanstack/react-query';
import { getPrograms } from './index'

export const UseGetProgram = () => {
    const controller = useQuery({ queryKey: ['getPrograms'], queryFn: () => getPrograms() });

    return controller;
};

