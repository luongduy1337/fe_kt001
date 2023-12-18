// useCookies.ts
import { useState } from 'react';
import Cookies from 'js-cookie';

interface CookiesHook {
  setAccessTokenCookie: (token: string) => void;
  getAccessTokenCookie: () => string | null;
  removeAccessTokenCookie: () => void;
}

export const useCookies = (): CookiesHook => {
  const [accessToken, setAccessToken] = useState<string | null>(Cookies.get('access_token') || null);

  const setAccessTokenCookie = (token: string) => {
    Cookies.set('access_token', token, { expires: 1, secure: true, sameSite: 'Strict' });
    setAccessToken(token);
  };

  const getAccessTokenCookie = (): string | null => {
    return accessToken;
  };

  const removeAccessTokenCookie = () => {
    Cookies.remove('access_token');
    setAccessToken(null);
  };

  return {
    setAccessTokenCookie,
    getAccessTokenCookie,
    removeAccessTokenCookie,
  };
};
