export default function useDefectUser () {
  const webapp = (window as any).Telegram?.WebApp.initDataUnsafe;
      // const webapp = {
      //   address: address,
      //   user: { id: "3a5a05f2-af44-4ce0-905e-f00bcd7bfb14" }
      // };
      if (webapp && webapp["user"]) {
        return { user: webapp["user"], id: webapp["user"].id };
      }

    return { user: null, id: null };
}