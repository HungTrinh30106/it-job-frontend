import { CardCompany } from "@/app/components/card/CardCompany";

export default function Page() {
  return (
    <>
      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">
            Danh sách công ty
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            <CardCompany />
            <CardCompany />
            <CardCompany />
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
      {/* End Section 2 */}
    </>
  );
}
