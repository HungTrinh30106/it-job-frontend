import Link from "next/link";
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      <header className="bg-[#000071] py-[15px]">
        <div className="contain">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="font-[800] text-white sm:text-[28px] text-[20px] lg:flex-none flex-1"
            >
              28.ITJobs
            </Link>

            {/* Navigation */}
            <nav className="lg:block hidden">
              <ul className="flex gap-x-[30px]">
                {/* Việc Làm IT */}
                <li className="inline-flex items-center gap-x-[8px] relative group/sub-1">
                  <Link href="/" className="text-[16px] font-[600] text-white">
                    Việc Làm IT
                  </Link>

                  <FaAngleDown className="text-white text-[16px]" />

                  {/* Dropdown cấp 1 */}
                  <ul className="w-[280px] bg-[#000065] rounded-[4px] absolute top-[100%] left-0 hidden group-hover/sub-1:block">
                    {/* Việc làm theo kỹ năng */}
                    <li className="px-[16px] py-[10px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                      <Link
                        href="/"
                        className="text-[16px] font-[600] text-white"
                      >
                        Việc làm IT theo kỹ năng
                      </Link>

                      <FaAngleRight className="text-white text-[16px]" />

                      {/* Dropdown cấp 2 */}
                      <ul className="w-[280px] bg-[#000065] rounded-[4px] absolute top-0 left-[100%] hidden group-hover/sub-2:block">
                        <li className="py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                          <Link
                            href="/"
                            className="font-[600] text-[16px] text-white"
                          >
                            ReactJS
                          </Link>
                        </li>

                        <li className="py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                          <Link
                            href="/"
                            className="font-[600] text-[16px] text-white"
                          >
                            NodeJS
                          </Link>
                        </li>

                        <li className="py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                          <Link
                            href="/"
                            className="font-[600] text-[16px] text-white"
                          >
                            Javascript
                          </Link>
                        </li>

                        <li className="py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                          <Link
                            href="/"
                            className="font-[600] text-[16px] text-white"
                          >
                            HTML5
                          </Link>
                        </li>

                        <li className="py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]">
                          <Link
                            href="/"
                            className="font-[600] text-[16px] text-white"
                          >
                            CSS3
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Việc làm theo công ty */}
                    <li className="px-[16px] py-[10px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                      <Link
                        href="/"
                        className="text-[16px] font-[600] text-white"
                      >
                        Việc làm IT theo công ty
                      </Link>

                      <FaAngleRight className="text-white text-[16px]" />
                    </li>

                    {/* Việc làm theo thành phố */}
                    <li className="px-[16px] py-[10px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]">
                      <Link
                        href="/"
                        className="text-[16px] font-[600] text-white"
                      >
                        Việc làm IT theo thành phố
                      </Link>

                      <FaAngleRight className="text-white text-[16px]" />
                    </li>
                  </ul>
                </li>

                {/* Top Công Ty IT */}
                <li className="inline-flex items-center gap-x-[8px] relative group/sub-1">
                  <Link href="/" className="text-[16px] font-[600] text-white">
                    Top Công Ty IT
                  </Link>

                  <FaAngleDown className="text-white text-[16px]" />

                  <ul className="w-[280px] bg-[#000065] rounded-[4px] absolute top-[100%] left-0 hidden group-hover/sub-1:block">
                    <li className="px-[16px] py-[10px] hover:bg-[#000096]">
                      <Link
                        href="/"
                        className="text-[16px] font-[600] text-white"
                      >
                        FPT Software
                      </Link>
                    </li>

                    <li className="px-[16px] py-[10px] hover:bg-[#000096]">
                      <Link
                        href="/"
                        className="text-[16px] font-[600] text-white"
                      >
                        Techcombank
                      </Link>
                    </li>

                    <li className="px-[16px] py-[10px] hover:bg-[#000096]">
                      <Link
                        href="/"
                        className="text-[16px] font-[600] text-white"
                      >
                        MB Bank
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Nhà Tuyển Dụng */}
                <li className="inline-flex items-center gap-x-[8px] relative group/sub-1">
                  <Link href="/" className="text-[16px] font-[600] text-white">
                    Nhà Tuyển Dụng
                  </Link>

                  <FaAngleDown className="text-white text-[16px]" />

                  <ul className="w-[280px] bg-[#000065] rounded-[4px] absolute top-[100%] left-0 hidden group-hover/sub-1:block">
                    <li className="px-[16px] py-[10px] hover:bg-[#000096]">
                      <Link
                        href="/"
                        className="text-[16px] font-[600] text-white"
                      >
                        ĐĂNG NHẬP
                      </Link>
                    </li>

                    <li className="px-[16px] py-[10px] hover:bg-[#000096]">
                      <Link
                        href="/"
                        className="text-[16px] font-[600] text-white"
                      >
                        ĐĂNG KÝ
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/* Login / Register */}
            <div className="font-[600] sm:text-[16px] text-[12px] text-white">
              <Link href="/" className="text-[16px] font-[600] text-white">
                ĐĂNG NHẬP
              </Link>

              <span className="text-white"> / </span>

              <Link href="/" className="text-[16px] font-[600] text-white">
                ĐĂNG KÝ
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="text-[20px] text-white lg:hidden ml-[12px]">
              <FaBars />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
