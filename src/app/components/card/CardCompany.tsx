import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";

export const CardCompany = (props: { item: any }) => {
  const { item } = props;

  return (
    <>
      <div className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item">
        <Link href={`/company/detail/${item.id}`} className="">
          <div className="sm:pt-[32px] pt-[20px] sm:px-[16px] px-[8x] sm:pb-[24px] pb-[16px] inner-body">
            <div className="sm:w-[160px] w-[125px] aspect-square rounded-[8px] bg-white mx-auto flex items-center justify-center inner-image mb-[24px]">
              <img
                src={item.logo}
                alt={item.companyName}
                className="p-[10px] w-full h-full object-contain"
              />
            </div>
            <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center line-clamp-2 sm:h-[54px] h-[42px]">
              {item.companyName}
            </h3>
          </div>
          <div className="bg-[#F7F7F7] flex sm:flex-row flex-col gap-[12px] items-center justify-between py-[12px] sm:px-[16px] px-[6px]">
            <div className="font-[400] sm:text-[14px] text-[12px] text-[#414042]">
              {item.city}
            </div>
            <div className="inline-flex items-center gap-[6px] font-[400] sm:text-[14px] text-[12px] text-[#121212]">
              <FaUserTie className="text-[#000096] text-[16px]" />{" "}
              {item.totalJob}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
