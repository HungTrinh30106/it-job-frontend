"use client";

import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

type MenuItem = {
  name: string;
  link: string;
  children?: MenuItem[];
};

export const HeaderMenu = (props: { openMenu: boolean }) => {
  const { openMenu } = props;

  const menuList: MenuItem[] = [
    {
      name: "Việc Làm IT",
      link: "#",
      children: [
        {
          name: "Việc làm IT theo kỹ năng",
          link: "#",
          children: [
            { name: "ReactJS", link: "#" },
            { name: "NodeJS", link: "#" },
            { name: "Javascript", link: "#" },
            { name: "HTML5", link: "#" },
            { name: "CSS3", link: "#" },
          ],
        },
        {
          name: "Việc làm IT theo công ty",
          link: "#",
          children: [
            { name: "FPT Software", link: "#" },
            { name: "Vietnamobile", link: "#" },
          ],
        },
        {
          name: "Việc làm IT theo thành phố",
          link: "#",
        },
      ],
    },
    {
      name: "Top công ty IT",
      link: "#",
      children: [
        { name: "FPT Software", link: "#" },
        { name: "Techcombank", link: "#" },
        { name: "MB Bank", link: "#" },
      ],
    },
    {
      name: "Nhà tuyển dụng",
      link: "#",
      children: [
        { name: "Đăng nhập", link: "#" },
        { name: "Đăng ký", link: "#" },
      ],
    },
  ];

  const MenuItemComponent = ({
    item,
    level,
  }: {
    item: MenuItem;
    level: number;
  }) => {
    const hasChildren = Boolean(item.children && item.children.length > 0);
    const [isOpenMobile, setIsOpenMobile] = useState(false);

    const toggleMobileSubmenu = (e: React.MouseEvent) => {
      if (hasChildren) {
        e.preventDefault();
        setIsOpenMobile((prev) => !prev);
      }
    };

    return (
      <li
        className={`
          relative group transition-all duration-200
          ${/* CSS dành cho Desktop (lg trở lên) */ ""}
          lg:hover:[&>ul]:block
          ${
            level === 1
              ? "lg:inline-flex lg:items-center lg:gap-x-2"
              : "lg:px-4 lg:py-2.5 lg:rounded lg:flex lg:items-center lg:justify-between lg:hover:bg-[#000096]"
          }

          ${/* CSS dành cho Mobile (dưới lg) */ ""}
          w-full flex flex-col border-b border-white/10 lg:border-none last:border-b-0
        `}
      >
        {/* Phần Header của Menu Item */}
        <div
          className={`
            flex items-center justify-between w-full py-3 px-4 lg:p-0
            ${level > 1 ? "lg:w-full" : ""}
            cursor-pointer select-none
          `}
          onClick={toggleMobileSubmenu}
        >
          <Link
            href={item.link}
            className="text-[15px] lg:text-[16px] font-[600] text-white hover:text-blue-200 transition-colors flex-1"
          >
            {item.name}
          </Link>

          {hasChildren && (
            <button
              type="button"
              className="p-1 text-white focus:outline-none"
              aria-label="Toggle Submenu"
            >
              {/* Icon cho Mobile (xoay góc khi mở/đóng) */}
              <FaAngleDown
                className={`text-white text-[14px] lg:hidden transition-transform duration-200 ${
                  isOpenMobile ? "rotate-180" : ""
                }`}
              />
              {/* Icon cho Desktop */}
              <span className="hidden lg:block">
                {level === 1 ? (
                  <FaAngleDown className="text-white text-[14px]" />
                ) : (
                  <FaAngleRight className="text-white text-[14px]" />
                )}
              </span>
            </button>
          )}
        </div>

        {/* Menu con (Submenu) */}
        {hasChildren && (
          <ul
            className={`
              /* Style chung */
              bg-[#000050] lg:bg-[#000065] rounded-md transition-all

              /* Style cho Desktop (Hover Flyout Popup) */
              lg:absolute lg:hidden lg:w-[280px] lg:z-50 lg:shadow-xl
              ${level === 1 ? "lg:top-full lg:left-0" : "lg:top-0 lg:left-full"}

              /* Style cho Mobile (Accordion xổ xuống dạng cây) */
              ${isOpenMobile ? "block" : "hidden"} 
              lg:group-hover:block
              pl-4 lg:pl-0 my-1 lg:my-0
            `}
          >
            {item.children?.map((child) => (
              <MenuItemComponent
                key={child.name}
                item={child}
                level={level + 1}
              />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav
      className={`
        /* Style màn hình Mobile (Sidebar Drawer có hiệu ứng trượt nhẹ và cuộn trang) */
        fixed top-0 left-0 z-50 w-[280px] h-full bg-[#000065] shadow-2xl overflow-y-auto p-4
        transition-all duration-300 ease-in-out
        ${openMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}

        /* Style màn hình Desktop (Màn hình lớn lg:) */
        lg:static lg:translate-x-0 lg:opacity-100 lg:w-auto lg:h-auto lg:bg-transparent lg:shadow-none lg:overflow-visible lg:p-0
        lg:block
      `}
    >
      <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px] w-full">
        {menuList.map((item) => (
          <MenuItemComponent key={item.name} item={item} level={1} />
        ))}
      </ul>
    </nav>
  );
};
