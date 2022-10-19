export const TOKEN_KEY = '@session-Token'
export const USERNAME_KEY = '@session-User'

export const isTokenNullInLS = () => localStorage.getItem(TOKEN_KEY) !== null
export const getTokenInLS = () => localStorage.getItem(TOKEN_KEY)
export const setTokenInLS = token => localStorage.setItem(TOKEN_KEY, token)
export const removeTokenInLS = () => localStorage.removeItem(TOKEN_KEY)

export const setUserInLS = (username) =>
  localStorage.setItem(USERNAME_KEY, username)
export const getUserInLS = () => localStorage.getItem(USERNAME_KEY)
export const removeUserInLS = () => localStorage.removeItem(USERNAME_KEY)
