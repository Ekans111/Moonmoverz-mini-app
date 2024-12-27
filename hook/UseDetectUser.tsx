import { useEffect, useState } from 'react';

export default function useDetectUser() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Check if the telegram web app is available
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tgWebApp = window.Telegram.WebApp;
      
      // Initialize the Telegram WebApp
      tgWebApp.ready();

      // Get user info from initDataUnsafe
      const user = tgWebApp.initDataUnsafe?.user;

      if (user) {
        setUserInfo(user);
      }
    }
  }, []);

  return userInfo
}