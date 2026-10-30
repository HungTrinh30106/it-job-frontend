"use client";
import { positionList, workingFormList } from "@/config/variable";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Detail = (props: { id: string }) => {
  const { id } = props;
  const [cvDetail, setCvDetail] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/cv/detail/${id}`, {
      credentials: "include", // Gửi kèm cookie
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "error") {
          toast.error(data.message);
        }
        if (data.code == "success") {
          setCvDetail(data.cvDetail);
        }
      });
  }, [id]);

  let position: any = null;
  let workingForm: any = null;
  if (cvDetail) {
    position = positionList.find((i) => i.value == cvDetail.position);
    workingForm = workingFormList.find((i) => i.value == cvDetail.workingForm);
  }

  return (
    <>
      {cvDetail && (
        <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
          <div className="flex flex-wrap gap-[20px] items-center justify-between mb-[20px]">
            <h1 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black">
              Thông tin CV
            </h1>
            <Link
              href="/user-manage/cv/list"
              className="font-[400] text-[14px] text-[#0088FF] underline"
            >
              Quay lại danh sách
            </Link>
          </div>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            Họ tên: <b>{cvDetail.fullName}</b>
          </div>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            Email: <b>{cvDetail.email}</b>
          </div>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            Số điện thoại: <b>{cvDetail.phone}</b>
          </div>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            File CV:
          </div>
          <div className="bg-[#D9D9D9] w-full h-[736px]">
            <iframe src={cvDetail.fileCV} className="w-full h-full"></iframe>
          </div>
        </div>
      )}
      {cvDetail && (
        <div className="border border-[#DEDEDE] rounded-[8px] p-[20px] mt-[20px]">
          <h2 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black mb-[20px]">
            Thông tin công việc
          </h2>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            Tên công việc: <b>{cvDetail.jobTitle}</b>
          </div>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            Mức lương:{" "}
            <b>
              {cvDetail.salaryMin.toLocaleString("en-US")}$ -{" "}
              {cvDetail.salaryMax.toLocaleString("en-US")}$
            </b>
          </div>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            Cấp bậc: <b>{position?.label}</b>
          </div>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            Hình thức làm việc: <b>{workingForm?.label}</b>
          </div>
          <div className="font-[400] text-[16px] text-black mb-[10px]">
            Công nghệ: <b>{cvDetail.technologies.join(", ")}</b>
          </div>
          <Link
            href={`/job/detail/${cvDetail.jobId}`}
            className="font-[400] text-[14px] text-[#0088FF] underline"
          >
            Xem chi tiết công việc
          </Link>
        </div>
      )}
    </>
  );
};
