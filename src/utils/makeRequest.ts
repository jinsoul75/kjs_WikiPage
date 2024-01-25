import { METHOD } from '@/constants/api';

export default async function makeRequest(method: string, url: string, data?: unknown) {
  try {
    let res;
    switch (method) {
      case METHOD.GET:
        res = await fetch(url);
        break;
      case METHOD.POST:
        res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
        });
        break;
      case METHOD.PATCH:
        res = await fetch(url, {
          method: 'PATCH',
          body: JSON.stringify(data),
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
