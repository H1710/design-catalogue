import { useState } from "react";
import "./App.css";
import ChangeAvatarForm from "./ChangeAvatarForm";
import Template from "./Template";

// 1
function App() {
  const [image, setImage] = useState("");
  const [location1, setlocation1] = useState("");
  const [openEditAvatar, setOpenEditAvatar] = useState(false);
  const a =
    "Examples might be simplified to improve reading and learning.\r\nTutorials, references, and examples are constantly reviewed to avoid errors, \r\nbut we cannot warrant full correctness of all content.";

  return (
    <div className="App flex justify-center">
      {/* <div
        className="w-64 h-64 border border-dashed border-red-100"
        onClick={(e) => {
          setOpenEditAvatar(true);
        }}
      >
        {image && <img src={image} alt="" className="object-cover w-64 h-64" />}
      </div> */}
      <ChangeAvatarForm
        openEditAvatar={openEditAvatar}
        setOpenEditAvatar={setOpenEditAvatar}
        setImage={setImage}
      />
      <div className="w-[550px] h-[700px] bg-white relative shadow-lg mt-2">
        <div className="bg-black w-[250px] h-[350px] absolute top-0 left-0"></div>
        <div className="bg-gray-100 w-[250px] h-[350px] absolute bottom-0 left-0"></div>
        <div className="bg-[#b48484] w-[300px] h-[175px] absolute bottom-0 right-0"></div>
        {/* Image Input */}
        <div
          className="w-[60px] h-[60px] border-2 border-dashed border-white-100 absolute top-2 left-[95px]"
          onClick={(e) => {
            setOpenEditAvatar(true);
          }}
        >
          {image && (
            <img
              src={image}
              alt=""
              className="object-cover w-[60px] h-[60px]"
            />
          )}
        </div>
        <div className="top-20 absolute border border-white left-[35px]">
          <input
            maxLength={5}
            className="bg-transparent text-white text-center w-[180px] h-[44px] text-3xl font-bold overflow-hidden resize-none"
            value={"Logo"}
          ></input>
        </div>
        <div className="top-[380px] absolute left-[30px]">
          <input
            maxLength={14}
            className="bg-transparent text-black w-[180px] h-[28px] text-sm font-bold overflow-hidden resize-none"
            value={"Lorem ipsum"}
          ></input>
        </div>
        <div className="top-[420px] absolute border border-white left-[30px]">
          <textarea
            maxLength={14}
            className="text-gray w-[140px] leading-5 resize-none h-[80px] bg-transparent overflow-hidden"
            value={"Lorem ipsum dolor sit amet adsk qwpj"}
          ></textarea>
        </div>
        <div className="bg-black rouded-sm w-[180px] left-[30px] h-[1px] absolute bottom-[174px] left-0"></div>
        <div className="top-[540px] absolute border border-white left-[30px]">
          <textarea
            maxLength={14}
            className="text-gray w-[140px] leading-5 resize-none h-[60px] bg-transparent overflow-hidden"
            value={"Lorem ipsum dolor sit amet"}
          ></textarea>
        </div>
        <div className="top-[610px] absolute border border-white left-[30px]">
          <textarea
            maxLength={14}
            className="text-gray w-[140px] leading-5 resize-none h-[60px] bg-transparent overflow-hidden"
            value={"Lorem ipsum dolor sit amet"}
          ></textarea>
        </div>
        <div className="bg-black rouded-sm w-[180px] left-[30px] h-[1px] absolute bottom-[12px] left-0"></div>

        {/* <div className="top-4 inset-x-0 absolute">
          <input
            maxLength={14}
            className="bg-transparent h-[28px] text-xl font-semibold overflow-hidden resize-none"
            value={"!23"}
          ></input>
        </div>
        <div className="top-12 inset-x-0 absolute">
          <input
            maxLength={4}
            className="bg-transparent h-[28px] text-xl font-semibold w-[80px] overflow-hidden resize-none"
          ></input>
        </div>
        <div className="top-28 left-8 absolute">
          <input
            maxLength={14}
            className="bg-transparent w-[380px] h-[64px] text-4xl font-bold overflow-hidden resize-none"
          ></input>
        </div>
        <div className="absolute top-48 left-8">
          <textarea
            className="text-gray w-[380px] resize-none h-[100px] bg-transparent overflow-hidden"
            maxLength={110}
            value={a}
            onChange={(e) => setlocation1(e.target.value)}
          ></textarea>
        </div>

        <div
          className="w-[400px] h-[400px] border-4 border-dashed border-red-100 absolute bottom-0"
          onClick={(e) => {
            setOpenEditAvatar(true);
          }}
        >
          {image && (
            <img
              src={image}
              alt=""
              className="object-cover w-[400px] h-[400px]"
            />
          )}
        </div> */}
      </div>
      {/* <Template /> */}
    </div>
  );
}

export default App;
