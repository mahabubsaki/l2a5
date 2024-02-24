import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../utils/axiosInstance';

const useFetcher = <T>(param: string, key: string) => {
    const axios = axiosInstance();
    const { data = [], error, isLoading, isError } = useQuery<T[]>({
        queryKey: [key],
        queryFn: async () => {
            const res = await axios.get(param);
            return res.data;
        },
    });
    return { data, error, isLoading, isError };

};

export default useFetcher;