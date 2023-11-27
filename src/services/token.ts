const AUTH_TOKEN_KEY_NAME = 'films-token';
const AUTH_AVATAR_URL = 'avatarURL';

export type Token = string;
export type AvatarUrl = string

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const getAvatar = (): AvatarUrl => {
  const avatarUrl = localStorage.getItem(AUTH_AVATAR_URL);
  return avatarUrl ?? '';
};

export const saveToken = (token: Token, avatar: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  localStorage.setItem(AUTH_AVATAR_URL, avatar);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  localStorage.removeItem(AUTH_AVATAR_URL);
};