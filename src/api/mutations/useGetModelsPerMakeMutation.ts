import { useQuery } from 'react-query';

import { useAxiosRequest } from '../axios';

interface QueryParams {
    makeId: string;
}

export default function useGetModelsPerMakeIdMutation(query: QueryParams) {
    const request = useAxiosRequest({
        method: 'get',
        url: `/api/vehicles/GetModelsForMakeId/${query.makeId}?format=json`
    });

    const { data, ...rest } = useQuery(['models-per-make', query], request);

    return {
        ...rest,
        data: data
            ? {
                  items: data.Results
              }
            : {
                  items: []
              }
    };
}
