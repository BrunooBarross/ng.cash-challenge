import api from './api';

export async function getListTransactions(token) {
  const response = await api.get('/balance', { 
    headers: {
        Authorization: `Bearer ${token}`,
      }
   });
  return response.data;
}