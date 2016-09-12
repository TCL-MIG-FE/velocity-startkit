const getApi = (url) => `${window.config.context}${url}`;

export const CODE_SUCCESS = 200;


export const USER_LOGIN  = getApi('/login');

export const GET_CONFIG  = getApi('/getConfig');



