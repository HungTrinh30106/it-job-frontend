import { positionList, workingFormList } from "@/config/variable";
import Link from "next/link";
import { FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6";

export function CardJob(props: { item: any }) {
  const { item } = props;

  const position = positionList.find((i) => i.value === item.position);
  const workingForm = workingFormList.find((i) => i.value === item.workingForm);

  return (
    <>
      <div
        key={item.id}
        className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item"
      >
        <Link href={`/job/detail/${item.id}`}>
          <div className="py-[20px] px-[16px] text-center inner-body">
            <div className="w-[117px] aspect-square bg-white rounded-[8px] mx-auto flex items-center justify-center inner-image mb-[20px]">
              <img
                src={item.companyLogo}
                alt={item.companyName}
                className="p-[10px] w-full h-full object-contain"
              />
            </div>
            <h3 className="font-[700] text-[18px] text-[#121212] mb-[6px]">
              {item.title}
            </h3>
            <div className="font-[400] text-[14px] text-[#121212] mb-[12px]">
              {item.companyName}
            </div>
            <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
              {item.salaryMin.toLocaleString("en-US")}$ -{" "}
              {item.salaryMax.toLocaleString("en-US")}$
            </div>
            <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
              <FaUserTie className="text-[16px]" />
              {position?.label}
            </div>
            <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[6px]">
              <FaBriefcase className="text-[16px]" /> {workingForm?.label}
            </div>
            <div className="flex items-center justify-center gap-[8px] font-[400] text-[14px] text-[#121212] mb-[12px]">
              <FaLocationDot className="text-[16px]" />
              {item.cityName}
            </div>
            <div className="flex items-center justify-center gap-[8px] flex-wrap">
              {item.technologies.map((tech: string, index: number) => (
                <div
                  key={index}
                  className="rounded-[20px] border-[1px] border-[#DEDEDE] px-[16px] py-[6px] font-[400] text-[12px] text-[#414042]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
