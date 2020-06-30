export async function client(
  endpoint: RequestInfo,
  { body, ...customConfig } = {} as RequestInit
) {
  const headers = { 'content-type': 'application/json' };

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = body;
  }

  const response = await fetch(
    `${process.env.REACT_APP_REMOTE_URL}/${endpoint}`,
    config
  );

  const data = await response.json();

  return data;
}
