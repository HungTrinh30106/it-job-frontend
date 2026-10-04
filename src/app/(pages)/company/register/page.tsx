"use client";
import JustValidate from "just-validate";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const validator = new JustValidate("#registerForm");

    validator
      .addField("#companyName", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập tên công ty!",
        },
        {
          rule: "maxLength",
          value: 255,
          errorMessage: "Tên công ty không được vượt quá 255 ký tự!",
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
      .addField("#password", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập mật khẩu!",
        },
        {
          rule: "strongPassword",
          errorMessage: (value: string) => {
            let html = ``;
            if (value.length < 8) {
              html += `
                <div>Mật khẩu phải có ít nhất 8 ký tự!</div>
              `;
            }
            if (/[A-Z]/.test(value) === false) {
              html += `
                <div>Mật khẩu phải có ít nhất một chữ cái viết hoa!</div>
              `;
            }
            if (/[a-z]/.test(value) === false) {
              html += `
                <div>Mật khẩu phải có ít nhất một chữ cái viết thường!</div>
              `;
            }
            if (/[0-9]/.test(value) === false) {
              html += `
                <div>Mật khẩu phải có ít nhất một chữ số!</div>
              `;
            }
            if (/[~!@#$%^&*]/.test(value) === false) {
              html += `
                <div>Mật khẩu phải có ít nhất một ký tự đặc biệt!</div>
              `;
            }
            return html;
          },
        },
      ])
      .onSuccess((event: any) => {
        const companyName = event.target.companyName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const dataFinal = {
          companyName: companyName,
          email: email,
          password: password,
        };

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataFinal),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.code == "error") {
              toast.error(data.message);
            }
            if (data.code == "success") {
              toast.success(data.message);
              router.push("/company/login");
            }
          })
          .catch((error) => {
            toast.error("Đã có lỗi xảy ra, vui lòng thử lại sau!");
            console.log(error);
          });
      });
  }, []);

  return (
    <>
      {/* Đăng ký (Nhà tuyển dụng) */}
      <div className="py-[60px]">
        <div className="contain">
          <div className="border border-[#DEDEDE] rounded-[8px] py-[50px] px-[20px] max-w-[602px] w-full mx-auto">
            <h1 className="font-[700] text-[20px] text-black mb-[20px] text-center">
              Đăng ký (Nhà tuyển dụng)
            </h1>
            <form
              id="registerForm"
              action=""
              className="grid gap-x-[20px] gap-y-[15px]"
            >
              <div className="">
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
                  name="password"
                  id="password"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>
              <div className="">
                <button className="bg-[#0088FF] rounded-[4px] h-[48px] px-[20px] font-[700] text-[16px] text-white w-full cursor-pointer">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Hết Đăng ký (Nhà tuyển dụng) */}
    </>
  );
}
