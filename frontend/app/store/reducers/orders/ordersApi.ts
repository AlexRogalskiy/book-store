import { createApi } from '@reduxjs/toolkit/query/react';
import DynamicBaseQuery from "@/app/store/dynamic-base-query";

const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: DynamicBaseQuery,
    tagTypes: ['order'],
    endpoints: (builder) => ({
        getOrders: builder.query<void, void>({
            query: () => {
                return {
                    url: 'orders/',
                    method: 'GET',
                }
            }
        }),
        getOrder: builder.query<void, number>({
            query: (id) => {
                return {
                    url: `orders/${id}`,
                    method: 'GET'
                }
            }
        }),
        addOrder: builder.mutation<void, void>({
            query: (order) => ({
                url: 'orders/',
                method: 'POST',
                body: order
            })
        }),
    })
});

export const {
    useGetOrdersQuery,
    useGetOrderQuery,
    useAddOrderMutation,
} = ordersApi;

export default ordersApi;
