import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Section1 = () => {
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
    </>
  );
};
