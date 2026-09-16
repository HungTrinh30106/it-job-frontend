import Link from "next/link";

export const HeaderAccount = () => {
  const companyMenu = [
    {
      name: "Thông tin công ty",
      link: "#",
    },
    {
      name: "Quản lý công việc",
      link: "#",
    },
    {
      name: "Quản lý CV",
      link: "#",
    },
    {
      name: "Đăng xuất",
      link: "#",
    },
  ];

  return (
    <>
      <div className="font-[600] sm:text-[16px] text-[12px] text-white relative group/sub-1">
        {/* Chưa đăng nhập */}
        {/* <Link href="/" className="text-[16px] font-[600] text-white">
          ĐĂNG NHẬP
        </Link>
        <span className="text-white"> / </span>
        <Link href="/" className="text-[16px] font-[600] text-white">
          ĐĂNG KÝ
        </Link> */}

        {/* Đã đăng nhập */}
        <Link href="" className="">
          LG Elect...
        </Link>
        <ul className="w-[180px] bg-[#000065] rounded-[4px] absolute top-[100%] right-0 hidden group-hover/sub-1:block">
          {companyMenu.map((item) => (
            <li
              key={item.name}
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
      </div>
    </>
  );
};
