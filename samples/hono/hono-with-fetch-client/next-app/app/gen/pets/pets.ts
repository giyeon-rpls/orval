/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type {
  CreatePetsBodyItem,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '.././models';

/**
 * @summary List all pets
 */
export type listPetsResponse = {
  data: Pets;
  status: number;
  headers: Headers;
};

export const getListPetsUrl = (params?: ListPetsParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString());
    }
  });

  return normalizedParams.size
    ? `http://localhost:8787/pets?${normalizedParams.toString()}`
    : `http://localhost:8787/pets`;
};

export const listPets = async (
  params?: ListPetsParams,
  options?: RequestInit,
): Promise<listPetsResponse> => {
  const res = await fetch(getListPetsUrl(params), {
    ...options,
    method: 'GET',
  });

  const data: Pets =
    [204, 205, 304].includes(res.status) || !res.body ? {} : await res.json();

  return { status: res.status, data, headers: res.headers };
};

/**
 * @summary Create a pet
 */
export type createPetsResponse = {
  data: Pet | Error;
  status: number;
  headers: Headers;
};

export const getCreatePetsUrl = () => {
  return `http://localhost:8787/pets`;
};

export const createPets = async (
  createPetsBodyItem: CreatePetsBodyItem[],
  options?: RequestInit,
): Promise<createPetsResponse> => {
  const res = await fetch(getCreatePetsUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createPetsBodyItem),
  });

  const data: Pet =
    [204, 205, 304].includes(res.status) || !res.body ? {} : await res.json();

  return { status: res.status, data, headers: res.headers };
};

/**
 * @summary Update a pet
 */
export type updatePetsResponse = {
  data: Pet | Error;
  status: number;
  headers: Headers;
};

export const getUpdatePetsUrl = () => {
  return `http://localhost:8787/pets`;
};

export const updatePets = async (
  pet: Pet,
  options?: RequestInit,
): Promise<updatePetsResponse> => {
  const res = await fetch(getUpdatePetsUrl(), {
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(pet),
  });

  const data: Pet =
    [204, 205, 304].includes(res.status) || !res.body ? {} : await res.json();

  return { status: res.status, data, headers: res.headers };
};

/**
 * @summary Info for a specific pet
 */
export type showPetByIdResponse = {
  data: Pet | Error;
  status: number;
  headers: Headers;
};

export const getShowPetByIdUrl = (petId: string) => {
  return `http://localhost:8787/pets/${petId}`;
};

export const showPetById = async (
  petId: string,
  options?: RequestInit,
): Promise<showPetByIdResponse> => {
  const res = await fetch(getShowPetByIdUrl(petId), {
    ...options,
    method: 'GET',
  });

  const data: Pet =
    [204, 205, 304].includes(res.status) || !res.body ? {} : await res.json();

  return { status: res.status, data, headers: res.headers };
};
