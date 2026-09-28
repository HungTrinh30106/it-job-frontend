import Link from "next/link";
import { FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6";

export function CardJob() {
  return (
    <>
      <div className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item">
        <Link href="">
          <div className="py-[20px] px-[16px] text-center inner-body">
            <div className="w-[117px] aspect-square bg-white rounded-[8px] mx-auto flex items-center justify-center inner-image mb-[20px]">
              <img
                src="/assets/images/demo-cong-ty-1.png"
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
    </>
  );
}
