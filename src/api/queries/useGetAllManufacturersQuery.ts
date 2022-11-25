import { useQuery } from 'react-query';

import { useAxiosRequest } from '../axios';

interface QueryParams {
    page: number;
}

export default function useGetAllManufacturersQuery(query: QueryParams) {
    const request = useAxiosRequest({
        method: 'get',
        url: [
            `/api/vehicles/GetAllManufacturers?format=json`,
            `&page=${query.page}`
        ].join('')
    });

    const { data, ...rest } = useQuery(['manufacturers', query], request);

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
