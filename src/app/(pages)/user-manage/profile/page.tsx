"use client";
import { useAuth } from "@/hooks/useAuth";
import JustValidate from "just-validate";
import { useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export default function Page() {
  const { infoUser } = useAuth();
  const [avatars, setAvatars] = useState<any>([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (infoUser) {
      const validator = new JustValidate("#profileForm");

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
        .onFail(() => {
          setIsValid(false);
        })
        .onSuccess(() => {
          setIsValid(true);
        });
    }
  }, [infoUser]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (isValid) {
      const fullName = event.target.fullName.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const avatar = avatars.length > 0 ? avatars[0].file : null;

      console.log(fullName);
      console.log(email);
      console.log(phone);
      console.log(avatar);
    }
  };

  return (
    <>
      {/* Thông tin cá nhân */}
      {infoUser && (
        <>
          <div className="py-[60px]">
            <div className="contain">
              <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
                <h1 className="font-[700] text-[20px] text-black mb-[20px]">
                  Thông tin cá nhân
                </h1>
                <form
                  id="profileForm"
                  onSubmit={handleSubmit}
                  action=""
                  className="grid sm:grid-cols-2 gap-x-[20px] gap-y-[15px]"
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="fullName"
                      className="block font-[500] text-[14px] text-black mb-[5px]"
                    >
                      Họ tên *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] px-[20px] font-[500] text-[14px] text-black"
                      defaultValue={infoUser.fullName}
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
                      defaultValue={infoUser.email}
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
                      defaultValue={infoUser.phone}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="avatar"
                      className="block font-[500] text-[14px] text-black mb-[5px]"
                    >
                      Avatar
                    </label>
                    <FilePond
                      name="avatar"
                      labelIdle="+"
                      acceptedFileTypes={["image/*"]}
                      allowImagePreview={true}
                      files={avatars}
                      onupdatefiles={setAvatars}
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
        </>
      )}
      {/* Hết Thông tin cá nhân */}
    </>
  );
}
