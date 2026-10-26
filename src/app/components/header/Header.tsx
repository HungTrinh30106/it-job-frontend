"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderAccount } from "./HeaderAccount";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const { isLogin, infoUser, infoCompany } = useAuth();

  useEffect(() => {
    if (!openMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        !menuRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  return (
    <>
      <header className="bg-[#000071] py-[15px]">
        <div className="contain">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="font-[800] text-white sm:text-[28px] text-[20px] lg:flex-none flex-1"
            >
              28.ITJobs
            </Link>
            <HeaderMenu openMenu={openMenu} isLogin={isLogin} menuRef={menuRef} />
            <HeaderAccount
              isLogin={isLogin}
              infoUser={infoUser}
              infoCompany={infoCompany}
            />
            <button
              ref={menuButtonRef}
              onClick={() => setOpenMenu(!openMenu)}
              className="text-[20px] text-white lg:hidden ml-[12px]"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
