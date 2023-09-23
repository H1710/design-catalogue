import React, { useState } from "react";
import ChangeAvatarForm from "./ChangeAvatarForm";

const Template = () => {
  const [image, setImage] = useState("");
  const [location1, setlocation1] = useState("");
  const [openEditAvatar, setOpenEditAvatar] = useState(false);
  const [template, setTemplate] = useState({
    styleGeneric: "w-[600px] h-[700px] bg-red-300 relative shadow-lg mt-2",
    pages: [
      [
        {
          textInput: true,
          imageInput: false,
          containerStyle: "top-4 inset-x-0 absolute",
          inputStyle:
            "bg-transparent h-[28px] text-xl font-semibold overflow-hidden resize-none",
          defaultContent: "NEW COLLECTIONS FOR",
          maxLength: 14,
          isOneLine: true,
        },
        {
          textInput: true,
          imageInput: false,
          containerStyle: "top-12 inset-x-0 absolute",
          inputStyle:
            "bg-transparent h-[28px] text-xl font-semibold w-[80px] overflow-hidden resize-none",
          defaultContent: "2035",
          maxLength: 4,
          isOneLine: true,
        },
        {
          textInput: true,
          imageInput: false,
          containerStyle: "top-28 left-8 absolute",
          inputStyle:
            "bg-transparent w-[380px] h-[64px] text-4xl font-bold overflow-hidden resize-none",
          defaultContent: "Product Catalog",
          maxLength: 14,
          isOneLine: true,
        },
        {
          textInput: true,
          imageInput: false,
          containerStyle: "absolute top-48 left-8",
          inputStyle:
            "text-gray w-[380px] resize-none h-[100px] bg-transparent overflow-hidden",
          defaultContent:
            "Examples might be simplified to improve reading and learning.Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.",
          maxLength: 110,
          isOneLine: false,
        },
        {
          textInput: false,
          imageInput: true,
          containerStyle:
            "w-[400px] h-[400px] border-4 border-dashed border-red-100 absolute bottom-0",
          imageStyle: "object-cover w-[400px] h-[400px]",
          defaultContent: "",
          maxLength: 0,
          isOneLine: false,
        },
      ],
    ],
  });
  const [page, setPage] = useState(0);
  return (
    <div className={template.styleGeneric}>
      {template.pages[page].map((pageDetail, index) =>
        pageDetail.textInput ? (
          pageDetail.isOneLine ? (
            <div className={pageDetail.containerStyle}>
              <input
                maxLength={pageDetail.maxLength}
                className={pageDetail.inputStyle}
                value={pageDetail.defaultContent}
              ></input>
            </div>
          ) : (
            <div className={pageDetail.containerStyle}>
              <textarea
                className={pageDetail.inputStyle}
                maxLength={pageDetail.maxLength}
                value={pageDetail.defaultContent}
                onChange={(e) => setlocation1(e.target.value)}
              ></textarea>
            </div>
          )
        ) : (
          <div
            className={pageDetail.containerStyle}
            onClick={(e) => {
              setOpenEditAvatar(true);
            }}
          >
            {image && (
              <img src={image} alt="" className={pageDetail.imageStyle} />
            )}
          </div>
        )
      )}
      <ChangeAvatarForm
        openEditAvatar={openEditAvatar}
        setOpenEditAvatar={setOpenEditAvatar}
        setImage={setImage}
      />
    </div>
  );
};

export default Template;
