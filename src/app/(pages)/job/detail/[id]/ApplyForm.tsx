"use client";
import { FileUpload } from "@/app/components/uploadFile/FileUpload";
import JustValidate from "just-validate";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const ApplyForm = (props: { jobId: string }) => {
  const { jobId } = props;

  const [isValid, setIsValid] = useState(false);
  const [fileCVs, setFileCVs] = useState<any>(null);

  useEffect(() => {
    //validate dữ liệu
    const validator = new JustValidate("#applyForm");

    validator
      .addField("#fullName", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập họ tên!",
        },
        {
          rule: "minLength",
          value: 5,
          errorMessage: "Họ tên phải có ít nhất 5 ký tự!",
        },
        {
          rule: "maxLength",
          value: 50,
          errorMessage: "Họ tên không được vượt quá 50 ký tự!",
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
      .addField("#phone", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập số điện thoại!",
        },
        {
          rule: "customRegexp",
          value: /^(0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])[0-9]{7}$/,
          errorMessage: "Số điện thoại không hợp lệ",
        },
      ])
      .onFail(() => {
        setIsValid(false);
      })
      .onSuccess(() => {
        setIsValid(true);
      });
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (isValid) {
      const fullName = event.target.fullName.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const fileCV = fileCVs.length > 0 ? fileCVs[0].file : null;

      if (!fileCV || fileCV.length == 0) {
        toast.error("Vui lòng tải lên file CV!");
        return;
      }

      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("fileCV", fileCV);
      formData.append("jobId", jobId);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/job/apply`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code == "error") {
            toast.error(data.message);
          }
          if (data.code == "success") {
            toast.success(data.message);
            event.target.reset();
            setFileCVs(null);
          }
        });
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        id="applyForm"
        className="grid gap-[15px]"
      >
        <div className="">
          <label
            htmlFor="fullName"
            className="font-[500] text-[14px] text-black mb-[5px] block"
          >
            Họ tên *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] px-[20px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="font-[500] text-[14px] text-black mb-[5px] block"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] px-[20px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label
            htmlFor="phone"
            className="font-[500] text-[14px] text-black mb-[5px] block"
          >
            Số điện thoại *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] px-[20px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label
            htmlFor="fileCV"
            className="font-[500] text-[14px] text-black mb-[5px] block"
          >
            File CV dạng PDF *
          </label>
          <FileUpload
            files={fileCVs}
            labelIdle="+"
            onUpdateFiles={setFileCVs}
            name="fileCV"
            required={true}
            acceptedFileTypes={["application/pdf"]}
          />
        </div>
        <button className="flex items-center justify-center h-[48px] rounded-[4px] bg-[#0088FF] font-[700] text-[16px] text-white mb-[20px] cursor-pointer">
          Gửi CV ứng tuyển
        </button>
      </form>
    </>
  );
};
