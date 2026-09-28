import Link from "next/link";
import { FaBriefcase, FaCircleCheck, FaEye, FaUserTie } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      {/* Quản lý công việc */}
      <div className="py-[60px]">
        <div className="contain">
          <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[20px]">
            Quản lý CV
          </h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
            <div className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item">
              <div className="py-[20px] px-[16px] text-center inner-body">
                <h3 className="font-[700] text-[18px] text-[#121212] line-clamp-2 mb-[12px]">
                  Frontend Engineer (ReactJS)
                </h3>
                <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                  Ứng viên: <b>Lê Văn A</b>
                </div>
                <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                  <i className="fa-solid fa-envelope text-[16px]" />{" "}
                  levana@gmail.com
                </div>
                <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                  <i className="fa-solid fa-phone text-[16px]" /> 0123456789
                </div>
                <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                  1.000$ - 1.500$
                </div>
                <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                  <FaUserTie className="text-[16px]" /> Fresher
                </div>
                <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                  <FaBriefcase className="text-[16px]" /> Tại văn phòng
                </div>
                <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#FF0000]">
                  <FaEye className="text-[16px]" /> Chưa xem
                </div>
                <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                  <FaCircleCheck className="text-[16px]" /> Chưa duyệt
                </div>
                <div className="mt-[20px] flex justify-center flex-wrap gap-[8px]">
                  <Link
                    href="#"
                    className="bg-[#0088FF] text-white rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                  >
                    Xem
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#9FDB7C] text-black rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                  >
                    Duyệt
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#FF5100] text-white rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                  >
                    Từ chối
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#FF0000] text-white rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                  >
                    Xóa
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <select
              name=""
              id=""
              className="bg-white border-[1px] border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]"
            >
              <option value="">Trang 1</option>
              <option value="">Trang 2</option>
              <option value="">Trang 3</option>
            </select>
          </div>
        </div>
      </div>
      {/* Hết Quản lý công việc */}
    </>
  );
}
