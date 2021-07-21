/*
 * Generated by orval v5.5.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useInfiniteQuery, useMutation } from 'vue-query';
import type {
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
} from 'vue-query/types';
import type {
  Pets,
  Error,
  ListPetsParams,
  Pet,
  CreatePetsBody,
} from '../model';
import { customInstance } from '../mutator/custom-instance';

type AsyncReturnType<
  T extends (...args: any) => Promise<any>,
  U = unknown
> = T extends (...args: any) => Promise<infer R> ? (U extends R ? U : R) : any;

export const listPets = <TData = Pets>(
  params?: ListPetsParams,
  version = 1,
) => {
  return customInstance<TData>({
    url: `/v${version}/pets`,
    method: 'get',
    params,
  });
};

export const getListPetsQueryKey = (params?: ListPetsParams, version = 1) => [
  `/v${version}/pets`,
  ...(params ? [params] : []),
];

export const useListPetsInfinite = <
  TQueryFnData = AsyncReturnType<typeof listPets, Pets>,
  TError = Error,
  TData = TQueryFnData
>(
  params?: ListPetsParams,
  version = 1,
  options?: { query?: UseInfiniteQueryOptions<TQueryFnData, TError, TData> },
) => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const query = useInfiniteQuery<TQueryFnData, TError, TData>(
    queryKey,
    ({ pageParam }) =>
      listPets<TQueryFnData>({ limit: pageParam, ...params }, version),
    { enabled: !!version, ...queryOptions },
  );

  return {
    queryKey,
    ...query,
  };
};

export const useListPets = <
  TQueryFnData = AsyncReturnType<typeof listPets, Pets>,
  TError = Error,
  TData = TQueryFnData
>(
  params?: ListPetsParams,
  version = 1,
  options?: { query?: UseQueryOptions<TQueryFnData, TError, TData> },
) => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => listPets<TQueryFnData>(params, version),
    { enabled: !!version, ...queryOptions },
  );

  return {
    queryKey,
    ...query,
  };
};

export const createPets = <TData = Pet>(
  createPetsBody: CreatePetsBody,
  version = 1,
) => {
  return customInstance<TData>({
    url: `/v${version}/pets`,
    method: 'post',
    data: createPetsBody,
  });
};

export const useCreatePets = <
  TData = AsyncReturnType<typeof createPets, Pet>,
  TError = Error,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options || {};

  return useMutation<
    TData,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >((props) => {
    const { data, version } = props || {};

    return createPets<TData>(data, version);
  }, mutationOptions);
};
export const showPetById = <TData = Pet>(petId: string, version = 1) => {
  return customInstance<TData>({
    url: `/v${version}/pets/${petId}`,
    method: 'get',
  });
};

export const getShowPetByIdQueryKey = (petId: string, version = 1) => [
  `/v${version}/pets/${petId}`,
];

export const useShowPetByIdInfinite = <
  TQueryFnData = AsyncReturnType<typeof showPetById, Pet>,
  TError = Error,
  TData = TQueryFnData
>(
  petId: string,
  version = 1,
  options?: { query?: UseInfiniteQueryOptions<TQueryFnData, TError, TData> },
) => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId, version);

  const query = useInfiniteQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => showPetById<TQueryFnData>(petId, version),
    { enabled: !!(version && petId), ...queryOptions },
  );

  return {
    queryKey,
    ...query,
  };
};

export const useShowPetById = <
  TQueryFnData = AsyncReturnType<typeof showPetById, Pet>,
  TError = Error,
  TData = TQueryFnData
>(
  petId: string,
  version = 1,
  options?: { query?: UseQueryOptions<TQueryFnData, TError, TData> },
) => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId, version);

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => showPetById<TQueryFnData>(petId, version),
    { enabled: !!(version && petId), ...queryOptions },
  );

  return {
    queryKey,
    ...query,
  };
};
