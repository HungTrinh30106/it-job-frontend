"use client";
import { useAuth } from "@/hooks/useAuth";
import { FileUpload } from "@/app/components/uploadFile/FileUpload";
import JustValidate from "just-validate";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const { infoCompany } = useAuth();
  const [logos, setLogos] = useState<any[]>([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (infoCompany) {
      // Hiển thị logo mặc định
      if (infoCompany.logo) {
        setLogos([
          {
            source: infoCompany.logo,
          },
        ]);
      }

      //validate dữ liệu
      const validator = new JustValidate("#profileForm");

      validator
        .addField("#companyName", [
          {
            rule: "required",
            errorMessage: "Vui lòng nhập tên công ty!",
          },
          {
            rule: "maxLength",
            value: 200,
            errorMessage: "Tên công ty không được vượt quá 200 ký tự!",
          },
        ])
        .addField("#email", [
          {
            rule: "required",
            errorMessage: "Vui lòng nhập email!",
          },
          {
            rule: "email",
            errorMessage: "Email không đúng định dạng!",
          },
        ])
        .onFail(() => {
          setIsValid(false);
        })
        .onSuccess(() => {
          setIsValid(true);
        });
    }
  }, [infoCompany]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (isValid) {
      const companyName = event.target.companyName.value;
      const logo = logos.length > 0 ? logos[0].file : null;
      const city = event.target.city.value;
      const address = event.target.address.value;
      const companyModel = event.target.companyModel.value;
      const companyEmployees = event.target.companyEmployees.value;
      const workingTime = event.target.workingTime.value;
      const workOverTime = event.target.workOverTime.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const description = event.target.description.value;

      const formData = new FormData();
      formData.append("companyName", companyName);
      formData.append("logo", logo);
      formData.append("city", city);
      formData.append("address", address);
      formData.append("companyModel", companyModel);
      formData.append("companyEmployees", companyEmployees);
      formData.append("workingTime", workingTime);
      formData.append("workOverTime", workOverTime);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("description", description);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/profile`, {
        method: "PATCH",
        body: formData,
        credentials: "include", // Giữ và cho phép gửi cookie từ frontend lên backend
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code == "error") {
            toast.error(data.message);
          }
          if (data.code == "success") {
            toast.success(data.message);
          }
        });
    }
  };

  return (
    <>
      {/* Thông tin công ty */}
      {infoCompany && (
        <div className="py-[60px]">
          <div className="contain">
            <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
              <h1 className="font-[700] text-[20px] text-black mb-[20px]">
                Thông tin công ty
              </h1>
              <form
                action=""
                id="profileForm"
                onSubmit={handleSubmit}
                className="grid sm:grid-cols-2 gap-x-[20px] gap-y-[15px]"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="companyName"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Tên công ty *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.companyName}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="logo"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Logo
                  </label>
                  <FileUpload
                    files={logos}
                    labelIdle="+"
                    onUpdateFiles={setLogos}
                    name="logo"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="city"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Thành phố
                  </label>
                  <select
                    name="city"
                    id="city"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                  >
                    <option value="">Hà Nội</option>
                    <option value="">Đà Nẵng</option>
                    <option value="">Hồ Chí Minh</option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor="address"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.address}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="companyModel"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Mô hình công ty
                  </label>
                  <input
                    type="text"
                    name="companyModel"
                    id="companyModel"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.companyModel}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="companyEmployees"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Quy mô công ty
                  </label>
                  <input
                    type="text"
                    name="companyEmployees"
                    id="companyEmployees"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.companyEmployees}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="workingTime"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Thời gian làm việc
                  </label>
                  <input
                    type="text"
                    name="workingTime"
                    id="workingTime"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.workingTime}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="workOverTime"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Làm việc ngoài giờ
                  </label>
                  <input
                    type="text"
                    name="workOverTime"
                    id="workOvertime"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.workOverTime}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="email"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.email}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="phone"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.phone}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block font-[500] text-[14px] text-black mb-[5px]"
                  >
                    Mô tả chi tiết
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="w-[100%] h-[350px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                    defaultValue={infoCompany.description}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button className="bg-[#0088FF] rounded-[4px] h-[48px] px-[20px] font-[700] text-[16px] text-white cursor-pointer">
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Hết Thông tin công ty */}
    </>
  );
}
