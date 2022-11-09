// NOTE: BASE_URL should point to staging env
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

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

    if (params) {
      searchParams = `?${new URLSearchParams(params).toString()}`;
    }

    const response = await fetch(`${BASE_URL}${url}${searchParams}`, {
      ...requestParams,
    });
    return response.json();
  },

  post: async (url: string, body: any) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...requestParams,
      method: 'POST',
      body: JSON.stringify(body),
    });
    return response.json();
  },

  put: async (url: string, body: any) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...requestParams,
      method: 'PUT',
      body: JSON.stringify(body),
    });
    return response.json();
  },

  delete: async (url: string) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...requestParams,
      method: 'DELETE',
    });
    return response.json();
  },
};

export default RequestFactory;
