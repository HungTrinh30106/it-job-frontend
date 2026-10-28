"use client";

import { positionList, workingFormList } from "@/config/variable";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function Detail(props: { id: string }) {
  const { id } = props;
  const [cvDetail, setCvDetail] = useState<any>({});
  const position = positionList.find((i) => i.value == cvDetail.position);
  const workingForm = workingFormList.find(
    (i) => i.value == cvDetail.workingForm,
  );

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/cv/detail/${id}`, {
      credentials: "include", // Giữ và cho phép gửi cookie từ frontend lên backend
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "error") {
          toast.error(data.message);
        }
        if (data.code == "success") {
          console.log(data.cvDetail);
          setCvDetail(data.cvDetail);
        }
      });
  }, [id]);

  return (
    <>
      {cvDetail && (
        <div className="py-[60px]">
          <div className="contain">
            <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
              <div className="flex flex-wrap gap-[20px] items-center justify-between mb-[20px]">
                <h1 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black">
                  Thông tin CV
                </h1>
                <Link
                  href="/company-manage/cv/list"
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
                Preview File CV dạng PDF tại đây
              </div>
            </div>
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
                  {cvDetail.salaryMin?.toLocaleString("en-US") ?? "—"}$ -
                  {cvDetail.salaryMax?.toLocaleString("en-US") ?? "—"}$
                </b>
              </div>
              <div className="font-[400] text-[16px] text-black mb-[10px]">
                Cấp bậc: <b>{position?.label}</b>
              </div>
              <div className="font-[400] text-[16px] text-black mb-[10px]">
                Hình thức làm việc: <b>{workingForm?.label}</b>
              </div>
              <div className="font-[400] text-[16px] text-black mb-[10px]">
                Công nghệ:{" "}
                <b>
                  {cvDetail.technologies?.map((item: any, index: number) => (
                    <span key={index}>
                      {item.name ?? item}
                      {index < cvDetail.technologies.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </b>
              </div>
              <Link
                href={`/job/detail/${cvDetail.jobId}`}
                className="font-[400] text-[14px] text-[#0088FF] underline"
              >
                Xem chi tiết công việc
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
