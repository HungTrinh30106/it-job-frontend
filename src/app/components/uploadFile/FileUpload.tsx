"use client";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

interface FileUploadProps {
  files: any[];
  onUpdateFiles: (files: any[]) => void;
  name?: string;
  labelIdle: string;
  acceptedFileTypes?: string[];
}

export const FileUpload = ({
  files,
  onUpdateFiles,
  name = "avatar",
  labelIdle = "+",
  acceptedFileTypes = ["image/*"],
}: FileUploadProps) => {
  return (
    <FilePond
      files={files}
      onupdatefiles={onUpdateFiles}
      name={name}
      labelIdle={labelIdle}
      acceptedFileTypes={acceptedFileTypes}
    />
  );
};
