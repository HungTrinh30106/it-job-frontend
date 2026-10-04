import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [infoUser, setInfoUser] = useState<any>(null);
  const [infoCompany, setInfoCompany] = useState<any>(null);
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
          if (data.infoUser) {
            setInfoUser(data.infoUser);
            setInfoCompany(null); // Nếu là user thì xóa thông tin công ty
          }
          if (data.infoCompany) {
            setInfoCompany(data.infoCompany);
            setInfoUser(null); // Nếu là công ty thì xóa thông tin user
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [pathname]);

  return {
    isLogin: isLogin,
    infoUser: infoUser,
    infoCompany: infoCompany,
  };
};
