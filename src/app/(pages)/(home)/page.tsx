import Link from "next/link";
import { FaMagnifyingGlass, FaUserTie } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#000065] py-[60px]">
        <div className="contain">
          <h1 className="font-[700] text-[28px] text-white text-center mb-[30px]">
            887 Việc Làm IT cho Developer "Chất"
          </h1>
          <form
            action=""
            className="flex gap-x-[15px] gap-y-[10px] md:flex-nowrap flex-wrap"
          >
            <select
              name=""
              id=""
              className="md:w-[240px] w-full h-[56px] rounded-[4px] px-[20px] bg-white font-[500] text-[16px] text-[#121212]"
            >
              <option value="">Tất cả thành phố</option>
              <option value="">Hà Nội</option>
              <option value="">Đà Nẵng</option>
            </select>
            <input
              type="text"
              placeholder="Nhập từ khóa..."
              className="flex-1 px-[20px] h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212]"
            />
            <button className="md:w-[240px] w-full bg-[#0088FF] h-[56px] flex gap-[10px] items-center justify-center rounded-[4px] font-[500] text-[16px] text-white">
              <FaMagnifyingGlass className="text-[20px]" /> TÌm kiếm
            </button>
          </form>
          <div className="mt-[30px] flex flex-wrap items-center gap-x-[12px] gap-y-[15px]">
            <div className="font-[500px] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <Link
                href=""
                className="bg-[#121212] hover:bg-[#414042] font-[500] text-[16px] text-[#DEDEDE] border-[1px] border-[#414042] rounded-[20px] py-[8px] px-[22px] hover:text-white"
              >
                ReactJS
              </Link>
              <Link
                href=""
                className="bg-[#121212] hover:bg-[#414042] font-[500] text-[16px] text-[#DEDEDE] border-[1px] border-[#414042] rounded-[20px] py-[8px] px-[22px] hover:text-white"
              >
                Javascript
              </Link>
              <Link
                href=""
                className="bg-[#121212] hover:bg-[#414042] font-[500] text-[16px] text-[#DEDEDE] border-[1px] border-[#414042] rounded-[20px] py-[8px] px-[22px] hover:text-white"
              >
                NoteJS
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End section 1 */}

      {/* Section-2 */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">
            Nhà tuyển dụng hàng đầu
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            <div className="rounded-[8px] border-[1px] border-[#DEDEDE] card-item">
              <Link href="">
                <div className="sm:pt-[32px] pt-[20px] sm:px-[16px] px-[8x] sm:pb-[24px] pb-[16px] inner-body">
                  <div className="sm:w-[160px] w-[125px] aspect-square rounded-[8px] bg-white mx-auto flex items-center justify-center mb-[24px] inner-image">
                    <img
                      src="assets/images/demo-cong-ty-1.png"
                      alt=""
                      className="p-[10px] w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center line-clamp-2 sm:h-[54px] h-[42px]">
                    LG Electronics Development Vietnam (LGEDV)
                  </h3>
                </div>
                <div className="bg-[#F7F7F7] flex sm:flex-row flex-col gap-[12px] items-center justify-between py-[12px] sm:px-[16px] px-[6px]">
                  <div className="font-[400] sm:text-[14px] text-[12px] text-[#414042]">
                    Ho Chi Minh
                  </div>
                  <div className="inline-flex items-center gap-[6px] font-[400] sm:text-[14px] text-[12px] text-[#121212]">
                    <FaUserTie className="text-[#000096]" /> 5 việc làm
                  </div>
                </div>
              </Link>
            </div>
            <div className="rounded-[8px] border-[1px] border-[#DEDEDE] card-item">
              <Link href="">
                <div className="sm:pt-[32px] pt-[20px] sm:px-[16px] px-[8x] sm:pb-[24px] pb-[16px] inner-body">
                  <div className="sm:w-[160px] w-[125px] aspect-square rounded-[8px] bg-white mx-auto flex items-center justify-center inner-image mb-[24px]">
                    <img
                      src="assets/images/demo-cong-ty-1.png"
                      alt=""
                      className="p-[10px] w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center line-clamp-2 sm:h-[54px] h-[42px]">
                    LG Electronics Development Vietnam (LGEDV)
                  </h3>
                </div>
                <div className="bg-[#F7F7F7] flex sm:flex-row flex-col gap-[12px] items-center justify-between py-[12px] sm:px-[16px] px-[6px]">
                  <div className="font-[400] sm:text-[14px] text-[12px] text-[#414042]">
                    Ho Chi Minh
                  </div>
                  <div className="inline-flex items-center gap-[6px] font-[400] sm:text-[14px] text-[12px] text-[#121212]">
                    <FaUserTie className="text-[#000096]" /> 5 việc làm
                  </div>
                </div>
              </Link>
            </div>
            <div className="rounded-[8px] border-[1px] border-[#DEDEDE] card-item">
              <Link href="">
                <div className="sm:pt-[32px] pt-[20px] sm:px-[16px] px-[8x] sm:pb-[24px] pb-[16px] inner-body">
                  <div className="sm:w-[160px] w-[125px] aspect-square rounded-[8px] bg-white mx-auto flex items-center justify-center inner-image mb-[24px]">
                    <img
                      src="assets/images/demo-cong-ty-1.png"
                      alt=""
                      className="p-[10px] w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center line-clamp-2 sm:h-[54px] h-[42px]">
                    LG Electronics Development Vietnam (LGEDV)
                  </h3>
                </div>
                <div className="bg-[#F7F7F7] flex sm:flex-row flex-col gap-[12px] items-center justify-between py-[12px] sm:px-[16px] px-[6px]">
                  <div className="font-[400] sm:text-[14px] text-[12px] text-[#414042]">
                    Ho Chi Minh
                  </div>
                  <div className="inline-flex items-center gap-[6px] font-[400] sm:text-[14px] text-[12px] text-[#121212]">
                    <FaUserTie className="text-[#000096]" /> 5 việc làm
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Section-2 */}
    </>
  );
}
