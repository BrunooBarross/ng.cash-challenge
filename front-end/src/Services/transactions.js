import api from './api';

export async function getListTransactions(token) {
  const response = await api.get('/balance', { 
    headers: {
        Authorization: `Bearer ${token}`,
      }
   });
  return response.data;
}

export async function postTransactions(token, userName, value) {
  const response = await api.post('/transaction',
    {
      userName,
      value
    },
    { 
    headers: {
        Authorization: `Bearer ${token}`,
      }
   });
  return response;
}