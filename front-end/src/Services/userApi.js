import api from './api';

export async function signIn(userName, password) {
  const response = await api.post('/signin', { userName, password });
  return response.data;
}

export async function signUp(data){
  const response = await api.post('/signup', data);
  return response.data;
}