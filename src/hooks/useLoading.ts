// useLoading.ts
import Router from "next/router";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 예: 3초 후에 오프닝 애니메이션을 숨김
  }, []);

  return isLoading;
};
