"use client";

import { Pagination } from "@/app/components/pagination/Pagination";
import { cvStatusList, positionList, workingFormList } from "@/config/variable";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FaBriefcase, FaCircleCheck, FaUserTie } from "react-icons/fa6";
import { toast } from "sonner";

function PageContent() {
  const [cvList, setCvList] = useState<any>([]);
  const [pagination, setPagination] = useState<any>(null);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/cv/list?page=${page}`, {
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
  }, [page, count]);

  const handleDelete = (id: any) => {
    const isConfirm = confirm("Bạn có chắc chắn muốn xóa cv này?");
    if (isConfirm) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/cv/delete/${id}`, {
        method: "DELETE",
        credentials: "include", // Giữ và cho phép gửi cookie từ frontend lên backend
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code == "error") {
            toast.error(data.message);
          }
          if (data.code == "success") {
            toast.success(data.message);
            setCount(count + 1);
          }
        });
    }
  };

  return (
    <>
      {/* Quản lý CV đã gửi */}

      {cvList && cvList.length > 0 && (
        <div className="py-[60px]">
          <div className="contain">
            <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[20px]">
              Quản lý CV đã gửi
            </h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
              {cvList.map((item: any, index: number) => {
                const position = positionList.find(
                  (i) => i.value == item.position,
                );
                const workingForm = workingFormList.find(
                  (i) => i.value == item.workingForm,
                );
                const status = cvStatusList.find((i) => i.value == item.status);
                return (
                  <div
                    key={index}
                    className="border-[1px] border-[#DEDEDE] rounded-[8px] card-item"
                  >
                    <div className="py-[20px] px-[16px] text-center inner-body">
                      <h3 className="font-[700] text-[18px] text-[#121212] line-clamp-2 mb-[12px]">
                        {item.jobTitle}
                      </h3>
                      <div className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px] text-[#121212]">
                        Công ty: <b>{item.companyName}</b>
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
                        className="flex items-center justify-center gap-x-[8px] mb-[6px] font-[400] text-[14px]"
                        style={{ color: status?.color }}
                      >
                        <FaCircleCheck className="text-[16px]" />{" "}
                        {status?.label}
                      </div>
                      <div className="mt-[20px] flex justify-center flex-wrap gap-[8px]">
                        <Link
                          href={`/user-manage/cv/detail/${item.id}`}
                          className="bg-[#0088FF] text-white rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block"
                        >
                          Xem
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-[#FF0000] text-white rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] inline-block cursor-pointer"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-[30px]">
              <Pagination
                pagination={pagination}
                totalItemInPage={cvList.length}
              />
            </div>
          </div>
        </div>
      )}
      {/* Hết Quản lý CV đã gửi */}
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="py-[60px] text-center">Đang tải...</div>}>
      <PageContent />
    </Suspense>
  );
}
