import { Section1 } from "@/app/components/section/Section1";
import Link from "next/link";
import { FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End section 1 */}

      {/* Kết quả tìm kiếm */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
            76 việc làm <span className="text-[#0088FF]">reactjs</span>
          </h2>
          <div className="filter bg-white rounded-[8px] flex flex-wrap items-center gap-[12px] py-[10px] px-[20px] mb-[30px]">
            <select
              name=""
              id=""
              className="px-[18px] py-[8px] rounded-[20px] border-[1px] border-[#DEDEDE] font-[400] text-[16px] text-[#414042]"
            >
              <option value="">Cấp bậc</option>
              <option value="">Intern</option>
              <option value="">Fresher</option>
              <option value="">Junior</option>
              <option value="">Middle</option>
              <option value="">Senior</option>
              <option value="">Manager</option>
            </select>
            <select
              name=""
              id=""
              className="px-[18px] py-[8px] rounded-[20px] border-[1px] border-[#DEDEDE] font-[400] text-[16px] text-[#414042]"
            >
              <option value="">Hình thức làm việc</option>
              <option value="">Tại văn phòng</option>
              <option value="">Làm từ xa</option>
              <option value="">Linh hoạt</option>
            </select>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
            <div className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item">
              <Link href="">
                <div className="py-[20px] px-[16px] text-center inner-body">
                  <div className="w-[117px] aspect-square bg-white rounded-[8px] mx-auto flex items-center justify-center inner-image mb-[20px]">
                    <img
                      src="assets/images/demo-cong-ty-1.png"
                      alt=""
                      className="p-[10px] w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-[700] text-[18px] text-[#121212] mb-[6px]">
                    Frontend Engineer (ReactJS)
                  </h3>
                  <div className="font-[400] text-[14px] text-[#121212] mb-[12px]">
                    LG CNS Việt Nam
                  </div>
                  <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                    1.000$ - 1.500$
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
                    <FaUserTie className="text-[16px]" /> Fresher
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
                    <FaBriefcase className="text-[16px]" /> Tại văn phòng
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[12px]">
                    <FaLocationDot className="text-[16px]" />
                    Ha Noi
                  </div>
                  <div className="flex items-center justify-center gap-[8px] flex-wrap">
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      ReactJS
                    </div>
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      NextJS
                    </div>
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      Javascript
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item">
              <Link href="">
                <div className="py-[20px] px-[16px] text-center inner-body">
                  <div className="w-[117px] aspect-square bg-white rounded-[8px] mx-auto flex items-center justify-center inner-image mb-[20px]">
                    <img
                      src="assets/images/demo-cong-ty-1.png"
                      alt=""
                      className="p-[10px] w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-[700] text-[18px] text-[#121212] mb-[6px]">
                    Frontend Engineer (ReactJS)
                  </h3>
                  <div className="font-[400] text-[14px] text-[#121212] mb-[12px]">
                    LG CNS Việt Nam
                  </div>
                  <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                    1.000$ - 1.500$
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
                    <FaUserTie className="text-[16px]" />
                    Fresher
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
                    <FaBriefcase className="text-[16px]" />
                    Tại văn phòng
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[12px]">
                    <FaLocationDot className="text-[16px]" />
                    Ha Noi
                  </div>
                  <div className="flex items-center justify-center gap-[8px] flex-wrap">
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      ReactJS
                    </div>
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      NextJS
                    </div>
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      Javascript
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item">
              <Link href="">
                <div className="py-[20px] px-[16px] text-center inner-body">
                  <div className="w-[117px] aspect-square bg-white rounded-[8px] mx-auto flex items-center justify-center inner-image mb-[20px]">
                    <img
                      src="assets/images/demo-cong-ty-1.png"
                      alt=""
                      className="p-[10px] w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-[700] text-[18px] text-[#121212] mb-[6px]">
                    Frontend Engineer (ReactJS)
                  </h3>
                  <div className="font-[400] text-[14px] text-[#121212] mb-[12px]">
                    LG CNS Việt Nam
                  </div>
                  <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                    1.000$ - 1.500$
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
                    <FaUserTie className="text-[16px]" />
                    Fresher
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
                    <FaBriefcase className="text-[16px]" />
                    Tại văn phòng
                  </div>
                  <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[12px]">
                    <FaLocationDot className="text-[16px]" />
                    Ha Noi
                  </div>
                  <div className="flex items-center justify-center gap-[8px] flex-wrap">
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      ReactJS
                    </div>
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      NextJS
                    </div>
                    <div className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]">
                      Javascript
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-[30px]">
            <select
              name=""
              id=""
              className="rounded-[8px] border-[1px] border-[#DEDEDE] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]"
            >
              <option value="">Trang 1</option>
              <option value="">Trang 2</option>
              <option value="">Trang 3</option>
            </select>
          </div>
        </div>
      </div>
      {/* End Kết quả tìm kiếm */}
    </>
  );
}
