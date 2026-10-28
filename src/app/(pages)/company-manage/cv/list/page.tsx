"use client";

import { Pagination } from "@/app/components/pagination/Pagination";
import { cvStatusList, positionList, workingFormList } from "@/config/variable";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCalendar,
  FaCircleCheck,
  FaEnvelope,
  FaEye,
  FaPhone,
  FaUserTie,
} from "react-icons/fa6";
import { toast } from "sonner";

export default function Page() {
  const [cvList, setCvList] = useState<any>([]);
  const [pagination, setPagination] = useState<any>(null);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/cv/list?page=${page}`, {
      credentials: "include", // Giữ và cho phép gửi cookie từ frontend lên backend
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "error") {
          toast.error(data.message);
        }
        if (data.code == "success") {
          setCvList(data.cvList);
          setPagination(data.pagination);
        }
      });
  }, [page]);

  return (
    <>
      {/* Quản lý công việc */}
      <div className="py-[60px]">
        <div className="contain">
          <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[20px]">
            Quản lý CV
          </h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
            {cvList.map((item: any) => {
              const position = positionList.find(
                (i) => i.value == item.position,
              );
              const workingForm = workingFormList.find(
                (i) => i.value == item.workingForm,
              );
              const status = cvStatusList.find((i) => i.value == item.status);
              return (
                <div
                  key={item.id}
                  className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item"
                >
                  <div className="py-[20px] px-[16px] text-center inner-body">
                    <h3 className="font-[700] text-[18px] text-[#121212] line-clamp-2 mb-[12px]">
                      {item.jobTitle}
                    </h3>
                    <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                      Ứng viên: <b>{item.fullName}</b>
                    </div>
                    <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                      <FaEnvelope className="text-[16px]" /> {item.email}
                    </div>
                    <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                      <FaPhone className="text-[16px]" /> {item.phone}
                    </div>
                    <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                      <FaCalendar className="text-[16px]" /> {item.createdAt}
                    </div>
                    <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                      {item.salaryMin.toLocaleString("en-US")}$ -{" "}
                      {item.salaryMax.toLocaleString("en-US")}$
                    </div>
                    <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                      <FaUserTie className="text-[16px]" /> {position?.label}
                    </div>
                    <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                      <FaBriefcase className="text-[16px]" />{" "}
                      {workingForm?.label}
                    </div>
                    <div
                      className={
                        "flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] " +
                        (item.viewed ? "" : "text-[#FF0000]")
                      }
                    >
                      <FaEye className="text-[16px]" />{" "}
                      {item.viewed ? "Đã xem" : "Chưa xem"}
                    </div>
                    <div
                      className={`flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px]`}
                      style={{
                        color: status?.color,
                      }}
                    >
                      <FaCircleCheck className="text-[16px]" /> {status?.label}
                    </div>
                    <div className="mt-[20px] flex justify-center flex-wrap gap-[8px]">
                      <Link
                        href={`/company-manage/cv/detail/${item.id}`}
                        className="bg-[#0088FF] text-white rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                      >
                        Xem
                      </Link>
                      {item.status !== "approved" && (
                        <Link
                          href="#"
                          className="bg-[#9FDB7C] text-black rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                        >
                          Duyệt
                        </Link>
                      )}
                      {item.status !== "rejected" && (
                        <Link
                          href="#"
                          className="bg-[#FF5100] text-white rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                        >
                          Từ chối
                        </Link>
                      )}
                      <Link
                        href="#"
                        className="bg-[#FF0000] text-white rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                      >
                        Xóa
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination pagination={pagination} totalItemInPage={cvList.length} />
        </div>
      </div>
      {/* Hết Quản lý công việc */}
    </>
  );
}
