"use client";

import { CardJob } from "@/app/components/card/CardJob";
import { Pagination } from "@/app/components/pagination/Pagination";
import { Section1 } from "@/app/components/section/Section1";
import { positionList, workingFormList } from "@/config/variable";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [jobList, setJobList] = useState<any>([]);
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const language = params.get("language") || "";
  const city = params.get("city") || "";
  const company = params.get("company") || "";
  const keyword = params.get("keyword") || "";
  const position = params.get("position") || "";
  const workingForm = params.get("workingForm") || "";
  const [pagination, setPagination] = useState<any>(null);
  const page = params.get("page") || "1";

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/search?language=${language}&city=${city}&company=${company}&keyword=${keyword}&position=${position}&workingForm=${workingForm}&page=${page}`,
    )
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
  }, [language, city, company, keyword, position, workingForm, page]);

  const handleFilter = (e: any, name: string) => {
    const value = e.target.value;

    // 1. Tạo bản sao của search params hiện tại
    const current = new URLSearchParams(Array.from(params.entries()));

    // 2. Cập nhật hoặc thêm params 'page'
    if (!value) {
      current.delete(name);
    } else {
      current.set(name, value);
    }

    // 3. CHuyển đổi thành chuỗi query string
    const search = current.toString();
    const query = search ? `?${search}` : "";

    // 4. Chuyển URL mà không load lại trang
    router.push(`${pathname}${query}`);
  };

  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End section 1 */}

      {/* Kết quả tìm kiếm */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
            {pagination ? pagination.totalRecord : 0} việc làm
            <span className="text-[#0088FF]">
              {language} {city} {company} {keyword}
            </span>
          </h2>
          <div className="filter bg-white rounded-[8px] flex flex-wrap items-center gap-[12px] py-[10px] px-[20px] mb-[30px]">
            <select
              onChange={(e) => handleFilter(e, "position")}
              name=""
              id=""
              className="px-[18px] py-[8px] rounded-[20px] border-[1px] border-[#DEDEDE] font-[400] text-[16px] text-[#414042]"
              defaultValue={position}
            >
              <option value="">Cấp bậc</option>
              {positionList.map((item: any, index: number) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => handleFilter(e, "workingForm")}
              name=""
              id=""
              className="px-[18px] py-[8px] rounded-[20px] border-[1px] border-[#DEDEDE] font-[400] text-[16px] text-[#414042]"
              defaultValue={workingForm}
            >
              <option value="">Hình thức làm việc</option>
              {workingFormList.map((item: any, index: number) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
            {jobList.map((item: any) => (
              <CardJob key={item.id} item={item} />
            ))}
          </div>
          <Pagination
            pagination={pagination}
            totalItemInPage={jobList.length}
          />
        </div>
      </div>
      {/* End Kết quả tìm kiếm */}
    </>
  );
}
