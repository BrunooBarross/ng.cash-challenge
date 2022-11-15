import api from './api';

export async function signIn(userName, password) {
  console.log(userName, password)
  const response = await api.post('/signin', { userName, password });
  return response.data;
}