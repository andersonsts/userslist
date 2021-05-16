import { api } from '../api'

import { USER_ROUTES } from './routes'

export const getAllUsers = async () => {
  const { data } = await api.get(USER_ROUTES.users)
  return data;
}