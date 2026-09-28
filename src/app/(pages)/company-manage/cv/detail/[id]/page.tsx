import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Chi tiết CV */}
      <div className="py-[60px]">
        <div className="contain">
          <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap gap-[20px] items-center justify-between mb-[20px]">
              <h1 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black">
                Thông tin CV
              </h1>
              <Link
                href=""
                className="font-[400] text-[14px] text-[#0088FF] underline"
              >
                Quay lại danh sách
              </Link>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Họ tên: <b>Lê Văn A</b>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Email: <b>levana@gmail.com</b>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Số điện thoại: <b>0123456789</b>
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
              Tên công việc: <b>Frontend Engineer (ReactJS)</b>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Mức lương: <b>1.000$ - 1.500$</b>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Cấp bậc: <b>Fresher</b>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Hình thức làm việc: <b>Tại văn phòng</b>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Công nghệ: <b>HTML5, CSS3, Javascript, ReactJS</b>
            </div>
            <Link
              href=""
              className="font-[400] text-[14px] text-[#0088FF] underline"
            >
              Xem chi tiết công việc
            </Link>
          </div>
        </div>
      </div>
      {/* Hết Chi tiết CV */}
    </>
  );
}
