import { useMutation } from 'react-query';

import { useAxiosRequest } from '../axios';

interface QueryParams {
    makeId: string;
}

export default function useGetModelsPerMakeIdMutation() {
    const request = useAxiosRequest({
        method: 'get'
    });

    return useMutation((query: QueryParams) => {
        return request({
            url: `/api/vehicles/GetModelsForMakeId/${query.makeId}?format=json`,
            data: {}
        });
    });
}
