"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRightLong,
  FaBriefcase,
  FaLocationDot,
  FaUserTie,
} from "react-icons/fa6";
import { toast } from "sonner";
import { positionList, workingFormList } from "@/config/variable";
import { ApplyForm } from "./ApplyForm";

export const Detail = (props: { id: string }) => {
  const { id } = props;
  const [jobDetail, setJobDetail] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/job/detail/${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "error") {
          toast.error(data.message);
        }
        if (data.code == "success") {
          setJobDetail(data.jobDetail);
        }
      });
  }, [id]);

  const position = positionList.find((i) => i.value === jobDetail?.position);
  const workingForm = workingFormList.find(
    (i) => i.value === jobDetail?.workingForm,
  );

  return (
    <>
      {jobDetail && (
        <div className="pt-[30px] pb-[60px]">
          <div className="contain">
            <div className="grid lg:grid-cols-[770fr_395fr] gap-[20px]">
              {/* Left */}
              <div className="">
                <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white">
                  <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[10px]">
                    {jobDetail.title}
                  </h1>
                  <div className="font-[400] text-[16px] text-[#414042] mb-[10px]">
                    {jobDetail.companyName}
                  </div>
                  <div className="font-[700] text-[20px] text-[#0088FF] sm:mb-[20px] mb-[10px]">
                    {jobDetail.salaryMin.toLocaleString("en-US")}$ -{" "}
                    {jobDetail.salaryMax.toLocaleString("en-US")}$
                  </div>
                  <Link
                    href="#boxApply"
                    className="flex items-center justify-center h-[48px] rounded-[4px] bg-[#0088FF] font-[700] text-[16px] text-white mb-[20px]"
                  >
                    Ứng tuyển
                  </Link>
                  <div className="mb-[20px] grid grid-cols-3 sm:gap-[16px] gap-[8px]">
                    {jobDetail.images.map((item: any, index: number) => (
                      <img
                        key={index}
                        src={item}
                        alt=""
                        className="w-full aspect-[232/145] object-cover rounded-[4px]"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-x-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                    <FaUserTie className="text-[16px]" /> {position?.label}
                  </div>
                  <div className="flex items-center gap-x-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                    <FaBriefcase className="text-[16px]" /> {workingForm?.label}
                  </div>
                  <div className="flex items-center gap-x-[8px] mb-[10px] font-[400] text-[14px] text-[#121212]">
                    <FaLocationDot className="text-[16px]" />{" "}
                    {jobDetail.companyAddress}
                  </div>
                  <div className="mt-[12px] flex flex-wrap items-center gap-[8px]">
                    {jobDetail.technologies.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white mt-[20px]">
                  <div
                    dangerouslySetInnerHTML={{ __html: jobDetail.description }}
                  />
                </div>
                <div
                  id="boxApply"
                  className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white mt-[20px]"
                >
                  <h2 className="font-[700] text-[20px] text-[#000000] mb-[20px]">
                    Ứng tuyển ngay
                  </h2>
                  <ApplyForm jobId={id} />
                </div>
              </div>
              {/* Right */}
              <div className="">
                <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white">
                  <div className="flex items-start gap-x-[12px]">
                    <img
                      src={jobDetail.companyLogo}
                      alt={jobDetail.companyName}
                      className="w-[100px] aspect-square rounded-[4px] object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-[700] text-[18px] text-[#121212] mb-[10px]">
                        {jobDetail.companyName}
                      </div>
                      <Link
                        href={`/job/company/${jobDetail.companyId}`}
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
                        {jobDetail.companyModel}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-[400] text-[16px] text-[#A6A6A6]">
                        Quy mô công ty
                      </div>
                      <div className="font-[400] text-[16px] text-[#121212]">
                        {jobDetail.companyEmployees} nhân viên
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-[400] text-[16px] text-[#A6A6A6]">
                        Thời gian làm việc
                      </div>
                      <div className="font-[400] text-[16px] text-[#121212]">
                        {jobDetail.companyWorkingTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-[400] text-[16px] text-[#A6A6A6]">
                        Làm việc ngoài giờ
                      </div>
                      <div className="font-[400] text-[16px] text-[#121212]">
                        {jobDetail.companyWorkOverTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Hết Chi tiết công việc */}
    </>
  );
};
