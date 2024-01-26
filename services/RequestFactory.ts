import { BASE_API_URL } from '../app/constants';

const requestParams = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'User-Agent': '*',
  },
};

interface RequestParams {
  [key: string]: any;
}

const RequestFactory = {
  get: async (url: string, params?: RequestParams) => {
    let searchParams = '';

    if (params != null) {
      searchParams = `?${new URLSearchParams(params).toString()}`;
    }

    const response = await fetch(`${BASE_API_URL}${url}${searchParams}`, {
      ...requestParams,
    });
    return await response.json();
  },

  post: async (url: string, body: any) => {
    const response = await fetch(`${BASE_API_URL}${url}`, {
      ...requestParams,
      method: 'POST',
      body: JSON.stringify(body),
    });
    return await response.json();
  },

  put: async (url: string, body: any) => {
    const response = await fetch(`${BASE_API_URL}${url}`, {
      ...requestParams,
      method: 'PUT',
      body: JSON.stringify(body),
    });
    return await response.json();
  },

  delete: async (url: string) => {
    const response = await fetch(`${BASE_API_URL}${url}`, {
      ...requestParams,
      method: 'DELETE',
    });
    return await response.json();
  },
};

export default RequestFactory;
