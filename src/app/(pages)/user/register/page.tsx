"use client";
import JustValidate from "just-validate";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const validator = new JustValidate("#registerForm");

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
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const dataFinal = {
          fullName: fullName,
          email: email,
          password: password,
        };

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataFinal),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.code == "error") {
              alert(data.message);
            }
            if (data.code == "success") {
              alert(data.message);
              // Chuyển hướng đến trang đăng nhập
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
  }, []);

  return (
    <>
      {/* Đăng ký (Ứng viên) */}
      <div className="py-[60px]">
        <div className="contain">
          <div className="border border-[#DEDEDE] rounded-[8px] py-[50px] px-[20px] max-w-[602px] w-full mx-auto">
            <h1 className="font-[700] text-[20px] text-black mb-[20px] text-center">
              Đăng ký (Ứng viên)
            </h1>
            <form
              id="registerForm"
              action=""
              className="grid gap-x-[20px] gap-y-[15px]"
            >
              <div className="">
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
                  autoComplete="email"
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
                  autoComplete="password"
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
      {/* Hết Đăng ký (Ứng viên) */}
    </>
  );
}
