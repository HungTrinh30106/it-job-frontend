"use client";

import { CardCompany } from "@/app/components/card/CardCompany";
import { Section1 } from "@/app/components/section/Section1";
import { useEffect, useState } from "react";

export default function Page() {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/list?limitItem=12`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.code == "success") {
          setCompanyList(data.companyList);
        }
      });
  }, []);

  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End section 1 */}

      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">
            Nhà tuyển dụng hàng đầu
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {companyList.map((item: any, index) => (
              <CardCompany key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* End Section 2 */}
    </>
  );
}
