import { useQuery } from 'react-query';

import { useAxiosRequest } from '../axios';

export default function useGetVehiclesQuery() {
    const request = useAxiosRequest({
        method: 'get',
        url: '/api/vehicles/GetModelsForMakeId/440?format=json'
    });
    const { data, ...rest } = useQuery(['vehicles'], request);

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
