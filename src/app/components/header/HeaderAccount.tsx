import Link from "next/link";

export const HeaderAccount = (props: {
  isLogin: boolean;
  infoUser: any;
  infoCompany: any;
}) => {
  const { isLogin, infoUser, infoCompany } = props;

  const companyMenu = [
    {
      name: "Thông tin công ty",
      link: "/company-manage/profile",
    },
    {
      name: "Quản lý công việc",
      link: "/company-manage/job/list",
    },
    {
      name: "Quản lý CV",
      link: "/company-manage/cv/list",
    },
    {
      name: "Đăng xuất",
      link: "/logout",
    },
  ];

  const userMenu = [
    {
      name: "Thông tin cá nhân",
      link: "/user-manage/profile",
    },
    {
      name: "Quản lý CV đã gửi",
      link: "/user-manage/resumes",
    },
    {
      name: "Đăng xuất",
      link: "/logout",
    },
  ];

  return (
    <>
      <div className="font-[600] sm:text-[16px] text-[12px] text-white relative group/sub-1">
        {isLogin ? (
          <>
            {infoUser && (
              <>
                {/* Đã đăng nhập vào user */}
                <Link href="" className="">
                  {infoUser.fullName}
                </Link>
                <ul className="w-[180px] bg-[#000065] rounded-[4px] absolute top-[100%] right-0 hidden group-hover/sub-1:block">
                  {userMenu.map((item, index) => (
                    <li
                      key={index}
                      className="py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]"
                    >
                      <Link
                        href={item.link}
                        className="font-[600] text-[16px] text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {infoCompany && (
              <>
                {/* Đã đăng nhập vào company */}
                <Link href="" className="">
                  {infoCompany.companyName}
                </Link>
                <ul className="w-[180px] bg-[#000065] rounded-[4px] absolute top-[100%] right-0 hidden group-hover/sub-1:block">
                  {companyMenu.map((item, index) => (
                    <li
                      key={index}
                      className="py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]"
                    >
                      <Link
                        href={item.link}
                        className="font-[600] text-[16px] text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        ) : (
          <>
            {/* Chưa đăng nhập */}
            <Link href="/user/login" className="">
              Đăng Nhập
            </Link>
            <span className="">/</span>
            <Link href="/user/register" className="">
              Đăng Ký
            </Link>
          </>
        )}
      </div>
    </>
  );
};
