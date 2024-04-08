import React, { useEffect, useState } from "react";
import Flower from "../../assets/flower.svg";
import Logo from "../../assets/logo.svg";
import emailjs from "@emailjs/browser";

function ComingSoon() {
  return (
    <div>
      <div
        className="items-center justify-center flex  flex-col"
        style={{ height: "93vh" }}
      >
        <div className="w-full h-full  flex flex-row justify-end absolute">
          <img src={Flower} className="" style={{ height: "95vh" }} />
        </div>

        <div className=" items-center  justify-center flex flex-col z-50">
          <img src={Logo} />
          <h1 className="text-2xl md:text-4xl xl:text-6xl text-black font-semibold uppercase">
            COMING soon!
          </h1>
          <Input />
          <a className="text-center text-xl mt-10 px-2">
            Let’s dive into an exciting adventure in the cosmetic world to
            upgrade beauty <br />
            standards by bringing a cosmetic revolution.
          </a>
        </div>
      </div>
      <div
        className="items-center justify-center flex  flex-col bg-green-400"
        style={{ height: "7vh", backgroundColor: "#B5DDED" }}
      >
        <a className="text-gray-600">@Blandicia 2024</a>
      </div>
    </div>
  );
}
export default ComingSoon;

function Input() {
  useEffect(() => {
    emailjs.init("GH_2F_WZeerFIYczf"); // Initialize EmailJS
  }, []);

  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submit action
    console.log(" e.target", e.target);
    emailjs
      .sendForm(
        "service_gm408yl",
        "template_p7fa3t1",
        e.target,
        "K97UFKdIWPR8c4j_Z"
      )
      .then(
        () => {
          alert("Subscribe Successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 flex md:flex-row flex-col w-full px-3 items-center justify-center"
    >
      <input
        name="from_email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="border border-gray-200 outline-none rounded-2xl h-12 px-4 md:w-96 w-full pr-7"
        required
      />
      <button
        type="submit"
        className="px-12 h-12 rounded-2xl text-black text-lg font-semibold md:-ml-5 mt-5 md:mt-0 w-full md:w-max bg-pink-light hover:bg-rose-200 duration-200 cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
}

// export default Input;
