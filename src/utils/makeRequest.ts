import { METHOD } from '@/constants/constants';

export default async function makeRequest(method: string, url: string, data?: unknown) {
  try {
    let res;
    switch (method) {
      case METHOD.GET:
        res = await fetch(url, {
          cache: 'no-store',
        });
        break;
      case METHOD.POST:
        res = await fetch(url, {
          method: METHOD.POST,
          body: JSON.stringify(data),
          cache: 'no-store',
        });
        break;
      case METHOD.PATCH:
        res = await fetch(url, {
          method: METHOD.PATCH,
          body: JSON.stringify(data),
          cache: 'no-store',
        });
        break;
      default:
        throw new Error('Unsupported HTTP method');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
