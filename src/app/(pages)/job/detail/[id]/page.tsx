import Link from "next/link";
import {
  FaArrowRightLong,
  FaBriefcase,
  FaLocationDot,
  FaUserTie,
} from "react-icons/fa6";

export default function Page() {
  return (
    <>
      {/* Chi tiết công việc */}
      <div className="pt-[30px] pb-[60px]">
        <div className="contain">
          <div className="grid lg:grid-cols-[770fr_395fr] gap-[20px]">
            {/* Left */}
            <div className="">
              <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white">
                <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[10px]">
                  Front End Developer ( Javascript, ReactJS)
                </h1>
                <div className="font-[400] text-[16px] text-[#414042] mb-[10px]">
                  LG CNS Việt Nam
                </div>
                <div className="font-[700] text-[20px] text-[#0088FF] sm:mb-[20px] mb-[10px]">
                  1.000$ - 1.500$
                </div>
                <Link
                  href="#boxApply"
                  className="flex items-center justify-center h-[48px] rounded-[4px] bg-[#0088FF] font-[700] text-[16px] text-white mb-[20px]"
                >
                  Ứng tuyển
                </Link>
                <div className="mb-[20px] grid grid-cols-3 sm:gap-[16px] gap-[8px]">
                  <img
                    src="/assets/images/demo-banner-1.png"
                    alt=""
                    className="w-full aspect-[232/145] object-cover rounded-[4px]"
                  />
                  <img
                    src="/assets/images/demo-banner-2.png"
                    alt=""
                    className="w-full aspect-[232/145] object-cover rounded-[4px]"
                  />
                  <img
                    src="/assets/images/demo-banner-3.png"
                    alt=""
                    className="w-full aspect-[232/145] object-cover rounded-[4px]"
                  />
                </div>
                <div className="flex items-center gap-x-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                  <FaUserTie className="text-[16px]" /> Fresher
                </div>
                <div className="flex items-center gap-x-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                  <FaBriefcase className="text-[16px]" /> Tại văn phòng
                </div>
                <div className="flex items-center gap-x-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                  <FaLocationDot className="text-[16px]" /> Tầng 15, tòa
                  Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi
                </div>
                <div className="mt-[12px] flex flex-wrap items-center gap-[8px]">
                  <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    ReactJS
                  </div>
                  <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    NextJS
                  </div>
                  <div className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    Javascript
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white mt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                mollitia? Aliquam, soluta amet nobis numquam commodi illum
                quaerat optio, pariatur libero aliquid odit ipsum fuga
                consequuntur delectus exercitationem voluptas magnam.
              </div>
              <div
                id="boxApply"
                className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white mt-[20px]"
              >
                <h2 className="font-[700] text-[20px] text-[#000000] mb-[20px]">
                  Ứng tuyển ngay
                </h2>
                <form action="" className="grid gap-[15px]">
                  <div className="">
                    <label
                      htmlFor="fullName"
                      className="font-[500] text-[14px] text-black mb-[5px] block"
                    >
                      Họ tên *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] px-[20px] font-[500] text-[14px] text-black"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="email"
                      className="font-[500] text-[14px] text-black mb-[5px] block"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] px-[20px] font-[500] text-[14px] text-black"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="phone"
                      className="font-[500] text-[14px] text-black mb-[5px] block"
                    >
                      Số điện thoại *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] px-[20px] font-[500] text-[14px] text-black"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="fileCV"
                      className="font-[500] text-[14px] text-black mb-[5px] block"
                    >
                      File CV dạng PDF *
                    </label>
                    <input
                      type="file"
                      id="fileCV"
                      accept="application/pdf"
                      className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] px-[20px] font-[500] text-[14px] text-black"
                    />
                  </div>
                  <button className="flex items-center justify-center h-[48px] rounded-[4px] bg-[#0088FF] font-[700] text-[16px] text-white mb-[20px] cursor-pointer">
                    Gửi CV ứng tuyển
                  </button>
                </form>
              </div>
            </div>
            {/* Right */}
            <div className="">
              <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white">
                <div className="flex items-start gap-x-[12px]">
                  <img
                    src="/assets/images/demo-cong-ty-2.png"
                    alt=""
                    className="w-[100px] aspect-square rounded-[4px] object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-[700] text-[18px] text-[#121212] mb-[10px]">
                      LG CNS Việt Nam
                    </div>
                    <Link
                      href=""
                      className="flex items-center gap-[8px] text-[#0088FF] font-[400] text-[16px]"
                    >
                      Xem công ty <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
                <div className="mt-[20px] grid gap-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Mô hình công ty
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212]">
                      Sản phẩm
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Quy mô công ty
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212]">
                      151 - 300 nhân viên
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Thời gian làm việc
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212]">
                      Thứ 2 - Thứ 6
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Làm việc ngoài giờ
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212]">
                      Không có OT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hết Chi tiết công việc */}
    </>
  );
}
