import { CardJob } from "@/app/components/card/CardJob";
import { Section1 } from "@/app/components/section/Section1";

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
            <CardJob />
            <CardJob />
            <CardJob />
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
