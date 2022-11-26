import { useQuery } from 'react-query';

import { useAxiosRequest } from '../axios';

interface QueryParams {
    manufacturerId: string | number;
}

export default function useGetMakesByManufacturerIdQuery(query: QueryParams) {
    const request = useAxiosRequest({
        method: 'get',
        url: `/api/vehicles/GetMakeForManufacturer/${query.manufacturerId}?format=json`
    });

    const { data, ...rest } = useQuery(
        ['makes-per-manufacturer', query],
        request
    );

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
