import { Editor } from "@tinymce/tinymce-react";

export const EditorMCE = (props: {
  value?: string;
  editorRef: any;
  id: string;
}) => {
  const { value = "", editorRef, id = "" } = props;
  return (
    <>
      <Editor
        id={id}
        apiKey={process.env.NEXT_PUBLIC_API_TINYMCE}
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
          toolbar:
            "undo redo | styles fontfamily fontsize | forecolor backcolor | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media fullscreen preview searchreplace | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
          quickbars_selection_toolbar:
            "bold italic underline | blocks | bullist numlist | blockquote quicklink",
          height: 600,
        }}
        initialValue={value}
        onInit={(_evt, editor) => (editorRef.current = editor)}
      />
    </>
  );
};
