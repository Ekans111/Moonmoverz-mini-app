import { retrieveLaunchParams } from "@tma.js/sdk";

export default function useDetectUser() {
  const { initData: data } = retrieveLaunchParams();
  const user = data?.user;

  return user;
}