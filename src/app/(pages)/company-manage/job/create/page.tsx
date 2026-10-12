"use client";

import { EditorMCE } from "@/app/components/editor/EditorMCE";
import { FileUpload } from "@/app/components/uploadFile/FileUpload";
import JustValidate from "just-validate";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { positionList, workingFormList } from "@/config/variable";

export default function Page() {
  const editorRef = useRef<any>(null);
  const [images, setImages] = useState<any>([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    //validate dữ liệu
    const validator = new JustValidate("#jobCreateForm");

    validator
      .addField("#title", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập tên công việc!",
        },
        {
          rule: "maxLength",
          value: 500,
          errorMessage: "Tên công ty không được vượt quá 500 ký tự!",
        },
      ])
      .addField("#salaryMin", [
        {
          rule: "minNumber",
          value: 0,
          errorMessage: "Mức lương tối thiểu phải lớn hơn hoặc bằng 0!",
        },
      ])
      .addField("#salaryMax", [
        {
          rule: "minNumber",
          value: 0,
          errorMessage: "Mức lương tối đa phải lớn hơn hoặc bằng 0!",
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
      const title = event.target.title.value;
      let salaryMin = event.target.salaryMin.value;
      if (salaryMin) {
        salaryMin = parseInt(salaryMin);
      } else {
        salaryMin = 0;
      }
      let salaryMax = event.target.salaryMax.value;
      if (salaryMax) {
        salaryMax = parseInt(salaryMax);
      } else {
        salaryMax = 0;
      }
      const position = event.target.position.value;
      const workingForm = event.target.workingForm.value;
      const technologies = event.target.technologies.value;
      const description = editorRef.current
        ? editorRef.current.getContent()
        : "";

      const formData = new FormData();
      formData.append("title", title);
      formData.append("salaryMin", salaryMin);
      formData.append("salaryMax", salaryMax);
      formData.append("position", position);
      formData.append("workingForm", workingForm);
      formData.append("technologies", technologies);
      formData.append("description", description);

      for (const item of images) {
        formData.append("images", item.file);
      }

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/job/create`, {
        method: "POST",
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
            // Xóa dữ liệu trong form
            event.target.reset();
            setImages([]);
          }
        });
    }
  };

  return (
    <>
      {/* Thêm mới công việc */}
      <div className="py-[60px]">
        <div className="contain">
          <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap gap-[20px] items-center justify-between mb-[20px]">
              <h1 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black">
                Thêm mới công việc
              </h1>
              <Link
                href="/company-manage/job/list"
                className="font-[400] text-[14px] text-[#0088FF] underline"
              >
                Quay lại danh sách
              </Link>
            </div>
            <form
              action=""
              id="jobCreateForm"
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Tên công việc *
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>
              <div className="">
                <label
                  htmlFor="salaryMin"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Mức lương tối thiểu ($)
                </label>
                <input
                  type="number"
                  name="salaryMin"
                  id="salaryMin"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>
              <div className="">
                <label
                  htmlFor="salaryMax"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Mức lương tối đa ($)
                </label>
                <input
                  type="number"
                  name="salaryMax"
                  id="salaryMax"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>
              <div className="">
                <label
                  htmlFor="position"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Cấp bậc
                </label>
                <select
                  name="position"
                  id="position"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                >
                  {positionList.map((item: any, index: number) => (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="workingForm"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Hình thức làm việc
                </label>
                <select
                  name="workingForm"
                  id="workingForm"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                >
                  {workingFormList.map((item: any, index: number) => (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="technologies"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Các công nghệ
                </label>
                <input
                  type="text"
                  name="technologies"
                  id="technologies"
                  className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="images"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Danh sách ảnh
                </label>
                <FileUpload
                  files={images}
                  labelIdle="+"
                  onUpdateFiles={setImages}
                  name="image"
                  allowMultiple={true}
                  maxFiles={3}
                  allowReorder={true}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Mô tả chi tiết
                </label>
                <EditorMCE editorRef={editorRef} id="description" />
              </div>
              <div className="sm:col-span-2">
                <button className="bg-[#0088FF] rounded-[4px] h-[48px] px-[20px] font-[700] text-[16px] text-white cursor-pointer">
                  Tạo mới
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Hết Thêm mới công việc */}
    </>
  );
}
