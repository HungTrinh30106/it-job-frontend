import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Pagination = (props: {
  pagination: any;
  totalItemInPage: number;
}) => {
  const { pagination, totalItemInPage } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePagination = (event: any) => {
    const value = event.target.value;

    // 1. Tạo bản sao của search params hiện tại
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    // 2. Cập nhật hoặc thêm params 'page'
    if (!value || value === "1") {
      current.delete("page");
    } else {
      current.set("page", value);
    }

    // 3. CHuyển đổi thành chuỗi query string
    const search = current.toString();
    const query = search ? `?${search}` : "";

    // 4. Chuyển URL mà không load lại trang
    router.push(`${pathname}${query}`);
  };

  return (
    <>
      {pagination && (
        <div className="mt-[30px] flex items-center gap-[10px]">
          <div className="">
            Hiển thị {pagination.skip + 1} - {pagination.skip + totalItemInPage}{" "}
            của {pagination.totalRecord}
          </div>
          <select
            onChange={handlePagination}
            className="bg-white border-[1px] border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]"
            value={pagination.currentPage}
          >
            {Array(pagination.totalPage)
              .fill("")
              .map((item, index) => {
                return (
                  <option key={index} value={index + 1}>
                    Trang {index + 1}
                  </option>
                );
              })}
          </select>
        </div>
      )}
    </>
  );
};
