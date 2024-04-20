const app = {
  title: import.meta.env.PUBLIC_ENV__TITLE,
  email: import.meta.env.PUBLIC_ENV__EMAIL,
  phone: import.meta.env.PUBLIC_ENV__PHONE,
  currency: import.meta.env.PUBLIC_ENV__CURRENCY,
  rootUrl: import.meta.env.PUBLIC_ENV__URL,
  dataUrl: import.meta.env.PUBLIC_ENV__DATA_URL,
};
const api = {
  url: import.meta.env.PUBLIC_ENV__API_URL,
};

export const config = { app, api };
