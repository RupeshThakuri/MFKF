import React, { useState } from "react";

// Icons
import { CiUser } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";

export default function Username() {
  const [stateName, setStateName] = useState("");
  const [stateEmail, setStateEmail] = useState("");

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStateName(evt.target.value);
  };

  const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStateEmail(evt.target.value);
  };

  const formData = [
    {
      id: 1,
      code: "id-b12",
      field: "Enter your Full Name",
      icon: (
        <CiUser
          className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="red"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        />
      ),
      desc: "Make sure you enter your full name",
      value: stateName,
      onChange: handleNameChange,
    },
    {
      id: 2,
      field: "Enter your email address",
      code: "id-b13",
      icon: (
        <BiLogoGmail
          className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        />
      ),
      desc: "Make sure you enter your valid email",
      value: stateEmail,
      onChange: handleEmailChange,
    },
  ];

  return (
    <>
      {/* Component: Plain leading icon input */}
      {formData.map((item) => (
        <div className="relative my-4" key={item.id}>
          <input
            id={item.code}
            type="text"
            name={item.code}
            placeholder={item.field}
            value={item.value}
            className="peer relative h-10 w-full border-b border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-400 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            onChange={item.onChange}
          />
          <p
            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
          >
            {item.field}
          </p>
          {item.icon}
          <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
            <span>{item.desc}</span>
            <span className="text-slate-500">1/10</span>
          </small>
        </div>
      ))}
      {/* End Plain leading icon input */}
    </>
  );
}
