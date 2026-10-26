"use client";

import { CardJob } from "@/app/components/card/CardJob";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "sonner";

export const CompanyDetail = (props: { id: string }) => {
  const { id } = props;

  const [companyDetail, setCompanyDetail] = useState<any>({});
  const [jobList, setJobList] = useState<any>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/detail/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "error") {
          toast.error(data.message);
        }
        if (data.code == "success") {
          setCompanyDetail(data.companyDetail);
          setJobList(data.jobList);
        }
      });
  }, [id]);

  return (
    <>
      if (companyDetail && jobList)
      {
        <div className="pt-[30px] pb-[60px]">
          <div className="contain">
            <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white">
              <div className="flex sm:items-center gap-[16px] sm:flex-row flex-col">
                <img
                  src={companyDetail.logo}
                  alt={companyDetail.companyName}
                  className="w-[100px] aspect-square rounded-[4px] object-cover"
                />
                <div className="flex-1">
                  <div className="font-[700] text-[28px] text-[#121212] mb-[10px]">
                    {companyDetail.companyName}
                  </div>
                  <div className="flex items-center gap-x-[8px] font-[400] text-[14px] text-[#121212]">
                    <FaLocationDot className="text-[#000096] text-[16px]" />{" "}
                    {companyDetail.address} {companyDetail.city}
                  </div>
                </div>
              </div>
              <div className="mt-[20px] grid gap-[10px]">
                <div className="flex items-center gap-[5px]">
                  <div className="font-[400] text-[16px] text-[#A6A6A6]">
                    Mô hình công ty:
                  </div>
                  <div className="font-[400] text-[16px] text-[#121212]">
                    {companyDetail.companyModel}
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="font-[400] text-[16px] text-[#A6A6A6]">
                    Quy mô công ty:
                  </div>
                  <div className="font-[400] text-[16px] text-[#121212]">
                    {companyDetail.companyEmployees} nhân viên
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="font-[400] text-[16px] text-[#A6A6A6]">
                    Thời gian làm việc:
                  </div>
                  <div className="font-[400] text-[16px] text-[#121212]">
                    {companyDetail.workingTime}
                  </div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <div className="font-[400] text-[16px] text-[#A6A6A6]">
                    Làm việc ngoài giờ:
                  </div>
                  <div className="font-[400] text-[16px] text-[#121212]">
                    {companyDetail.workOverTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white mt-[20px]">
              <div
                dangerouslySetInnerHTML={{ __html: companyDetail.description }}
              />
            </div>
            <div className="mt-[30px]">
              <h2 className="font-[700] text-[28px] text-[#121212] mb-[20px]">
                Công ty có 6 việc làm
              </h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                {jobList.map((item: any, index: number) => (
                  <CardJob key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
