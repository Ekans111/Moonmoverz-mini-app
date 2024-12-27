import { useEffect, useState } from 'react';

export default function useDetectUser() {
  const [userInfo, setUserInfo] = useState({ user: null, id: null });

  useEffect(() => {
    const webapp = (window as any).Telegram?.WebApp.initDataUnsafe;

    console.log('webapp:', webapp); // Debugging line

    if (webapp && webapp["user"]) {
      setUserInfo({ user: webapp["user"], id: webapp["user"].id });
    } else {
      setUserInfo({ user: null, id: null });
    }
  }, []);

  return userInfo;
}