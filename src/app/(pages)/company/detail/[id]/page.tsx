import { CardJob } from "@/app/components/card/CardJob";
import { FaLocationDot } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      {/* Chi tiết công ty */}
      <div className="pt-[30px] pb-[60px]">
        <div className="contain">
          <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white">
            <div className="flex sm:items-center gap-[16px] sm:flex-row flex-col">
              <img
                src="/assets/images/demo-cong-ty-2.png"
                alt=""
                className="w-[100px] aspect-square rounded-[4px] object-cover"
              />
              <div className="flex-1">
                <div className="font-[700] text-[28px] text-[#121212] mb-[10px]">
                  LG CNS Việt Nam
                </div>
                <div className="flex items-center gap-x-[8px] font-[400] text-[14px] text-[#121212]">
                  <FaLocationDot className="text-[#000096] text-[16px]" /> Tầng
                  15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi
                </div>
              </div>
            </div>
            <div className="mt-[20px] grid gap-[10px]">
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Mô hình công ty:
                </div>
                <div className="font-[400] text-[16px] text-[#121212]">
                  Sản phẩm
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Quy mô công ty:
                </div>
                <div className="font-[400] text-[16px] text-[#121212]">
                  151 - 300 nhân viên
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Thời gian làm việc:
                </div>
                <div className="font-[400] text-[16px] text-[#121212]">
                  Thứ 2 - Thứ 6
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Làm việc ngoài giờ:
                </div>
                <div className="font-[400] text-[16px] text-[#121212]">
                  Không có OT
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#DEDEDE] rounded-[8px] p-[20px] bg-white mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            mollitia? Aliquam, soluta amet nobis numquam commodi illum quaerat
            optio, pariatur libero aliquid odit ipsum fuga consequuntur delectus
            exercitationem voluptas magnam.
          </div>
          <div className="mt-[30px]">
            <h2 className="font-[700] text-[28px] text-[#121212] mb-[20px]">
              Công ty có 6 việc làm
            </h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
              <CardJob />
              <CardJob />
              <CardJob />
            </div>
          </div>
        </div>
      </div>
      {/* Hết Chi tiết công ty */}
    </>
  );
}
