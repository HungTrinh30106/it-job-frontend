import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [infoUser, setInfoUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/check`, {
      credentials: "include", // Giữ và gửi được cookie
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "error") {
          setIsLogin(false);
        }
        if (data.code == "success") {
          setIsLogin(true);
          setInfoUser(data.infoUser);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [pathname]);

  return {
    isLogin: isLogin,
    infoUser: infoUser,
  };
};
