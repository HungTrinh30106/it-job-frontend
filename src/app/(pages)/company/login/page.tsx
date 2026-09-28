export default function Page() {
  return (
    <>
      {/* Đăng nhập (Nhà tuyển dụng) */}
      <div className="py-[60px]">
        <div className="contain">
          <div className="border border-[#DEDEDE] rounded-[8px] py-[50px] px-[20px] max-w-[602px] w-full mx-auto">
            <h1 className="font-[700] text-[20px] text-black mb-[20px] text-center">
              Đăng nhập (Nhà tuyển dụng)
            </h1>
            <form action="" className="grid gap-x-[20px] gap-y-[15px]">
              <div className="">
                <label
                  htmlFor="email"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name=""
                  id="email"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>
              <div className="">
                <button className="bg-[#0088FF] rounded-[4px] h-[48px] px-[20px] font-[700] text-[16px] text-white w-full">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Hết Đăng nhập (Nhà tuyển dụng) */}
    </>
  );
}
