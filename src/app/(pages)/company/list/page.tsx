"use client";
import { CardCompany } from "@/app/components/card/CardCompany";
import { Pagination } from "@/app/components/pagination/Pagination";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function PageContent() {
  const [companyList, setCompanyList] = useState([]);
  const [pagination, setPagination] = useState<any>(null);
  const params = useSearchParams();
  const page = params.get("page") || "1";

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/company/list?limitItem=2&page=${page}`,
      {},
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "success") {
          setCompanyList(data.companyList);
          setPagination(data.pagination);
        }
      });
  }, [page]);

  return (
    <>
      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">
            Danh sách công ty
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {companyList.map((item: any, index) => (
              <CardCompany key={index} item={item} />
            ))}
          </div>
          <Pagination
            pagination={pagination}
            totalItemInPage={companyList.length}
          />
        </div>
      </div>
      {/* End Section 2 */}
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
