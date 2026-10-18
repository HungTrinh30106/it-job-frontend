"use client";

import { Pagination } from "@/app/components/pagination/Pagination";
import { positionList, workingFormList } from "@/config/variable";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBriefcase, FaUserTie } from "react-icons/fa";
import { toast } from "sonner";

export default function Page() {
  const [jobList, setJobList] = useState([]);
  const [pagination, setPagination] = useState<any>(null);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/job/list?page=${page}`, {
      credentials: "include", // Giữ và cho phép gửi cookie từ frontend lên backend
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "error") {
          toast.error(data.message);
        }
        if (data.code == "success") {
          setJobList(data.jobs);
          setPagination(data.pagination);
        }
      });
  }, [page]);

  return (
    <>
      {/* Quản lý công việc */}
      <div className="py-[60px]">
        <div className="contain">
          <div className="mb-[20px] flex items-center justify-between flex-wrap gap-[20px]">
            <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212]">
              Quản lý công việc
            </h1>
            <Link
              href="/company-manage/job/create"
              className="bg-[#0088FF] rounded-[4px] font-[400] text-[14px] text-white py-[8px] px-[20px]"
            >
              Thêm mới
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
            {jobList.map((item: any) => {
              const position = positionList.find(
                (i) => i.value === item.position,
              );
              const workingForm = workingFormList.find(
                (i) => i.value === item.workingForm,
              );

              return (
                <div
                  key={item.id}
                  className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item"
                >
                  <div className="py-[20px] px-[16px] text-center inner-body">
                    <h3 className="font-[700] text-[18px] text-[#121212] line-clamp-2 mb-[12px]">
                      {item.title}
                    </h3>
                    <div className="font-[600] text-[16px] text-[#0088FF] mb-[6px]">
                      {item.salaryMin.toLocaleString("vi-VN")}$ -{" "}
                      {item.salaryMax.toLocaleString("vi-VN")}$
                    </div>
                    <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                      <FaUserTie className="text-[16px]" /> {position?.label}
                    </div>
                    <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                      <FaBriefcase className="text-[16px]" />{" "}
                      {workingForm?.label}
                    </div>
                    <div className="mt-[12px] flex flex-wrap items-center justify-center gap-[8px]">
                      {item.technologies.map(
                        (itemTech: string, indexTech: number) => {
                          return (
                            <div
                              key={indexTech}
                              className="border-[1px] border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]"
                            >
                              {itemTech}
                            </div>
                          );
                        },
                      )}
                    </div>
                    <div className="mt-[20px] flex justify-center gap-[12px]">
                      <Link
                        href={`/company-manage/job/edit/${item.id}`}
                        className="bg-[#FFB200] text-black rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                      >
                        Sửa
                      </Link>
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
          <Pagination
            pagination={pagination}
            totalItemInPage={jobList.length}
          />
        </div>
      </div>
      {/* Hết Quản lý công việc */}
    </>
  );
}
