import React, { useState } from "react";
import { getAllData } from "../../services";
import { endPoints } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  return (
    <>
      <div className="dialog" id="dialog">
        <div className="card w-full p-0">
          <div className="card-body w-full p-0">
            <div className="view login-view" style={{ display: "block" }}>
              <div className="h-auto flex">
                <div className="login-img-section lg:flex w-full lg:w-1/2 justify-around items-center">
                  <div className="inset-0 z-0" />
                  <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                    <h1 className="text-white font-bold text-4xl font-sans text-center">
                      Pay your bills with Ranapay
                    </h1>
                    <p className="text-white mt-1 text-center">
                      The simplest app to use
                    </p>
                    <img
                      className="w-7/12 h-6/12 mx-auto"
                      src="loginShow"
                      alt=""
                    />
                    <div className="flex justify-center lg:justify-start mt-6">
                      <button className="get-started-button hover:bg-indigo-700 mx-auto hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-2 px-4 py-2 rounded-2xl font-bold mb-2">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white rounded-[8px]">
                  <div className="relative flex items-center">
                    <div className="w-full z-10">
                      <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">
                          Welcom Back!
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                          Please sign in to your account
                        </p>
                      </div>
                      <form
                        className="mt-8 space-y-6"
                        onSubmit={(e) => {
                          e.preventDefault();
                          //   console.log(loginData);

                          getAllData(endPoints.users).then((res) => {
                            // console.log(res);

                            let loginUser = res.find(
                              (elem) =>
                                elem.username == loginData.username &&
                                elem.password == loginData.password
                            );
                            // console.log("loginUser", loginUser);

                            if (loginUser) {
                              console.log("welcome");

                              localStorage.setItem(
                                "loginUser",
                                JSON.stringify(loginUser)
                              );
                              navigate("/");

                              //   setLoginData({
                              //     username: "",
                              //     password: "",
                              //   });
                            } else {
                              console.log("error");
                            }
                          });
                        }}
                      >
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="relative">
                          <div className="absolute right-0 mt-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-green-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <label className="text-sm font-bold text-gray-700 tracking-wide">
                            Username
                          </label>
                          <input
                            value={loginData.username}
                            onChange={(e) => {
                              setLoginData({
                                ...loginData,
                                username: e.target.value,
                              });
                            }}
                            className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            type=""
                            placeholder="Username"
                          />
                        </div>
                        <div className="mt-8 content-center">
                          <label className="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                          </label>
                          <input
                            value={loginData.password}
                            onChange={(e) => {
                              setLoginData({
                                ...loginData,
                                password: e.target.value,
                              });
                            }}
                            className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            type=""
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember_me"
                              name="remember_me"
                              type="checkbox"
                              className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="remember_me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-indigo-500 hover:text-indigo-500"
                            >
                              Forgot your password?
                            </a>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
                          >
                            Sign in
                          </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                          <span>Don't have an account?</span>
                          <a
                            href="#"
                            className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
                          >
                            Sign up
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view non-login-view" style={{ display: "none" }}>
              <div className="h-auto flex">
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white rounded-[8px]">
                  <div className="relative flex items-center">
                    <div className="w-full z-10">
                      <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">
                          Register your self!
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                          Please sign in to your account
                        </p>
                      </div>
                      <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="relative">
                          <div className="absolute right-0 mt-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-green-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <label className="text-sm font-bold text-gray-700 tracking-wide">
                            Email
                          </label>
                          <input
                            className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            type=""
                            placeholder="mail@gmail.com"
                          />
                        </div>
                        <div className="mt-8 content-center">
                          <label className="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                          </label>
                          <input
                            className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            type=""
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember_me"
                              name="remember_me"
                              type="checkbox"
                              className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="remember_me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-indigo-500 hover:text-indigo-500"
                            >
                              Forgot your password?
                            </a>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
                          >
                            Sign in
                          </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                          <span>Don't have an account?</span>
                          <button
                            onClick={() => {
                              navigate("/register");
                            }}
                            href="#"
                            className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
                          >
                            Sign up
                          </button>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="login-img-section lg:flex w-full lg:w-1/2 justify-around items-center">
                  <div className="inset-0 z-0" />
                  <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                    <h1 className="text-white font-bold text-4xl font-sans text-center">
                      Pay your bills with Ranapay
                    </h1>
                    <p className="text-white mt-1 text-center">
                      The simplest app to use
                    </p>
                    <img
                      className="w-7/12 h-6/12 mx-auto"
                      src="loginShow"
                      alt=""
                    />
                    <div className="flex justify-center lg:justify-start mt-6">
                      <button className="get-started-button hover:bg-indigo-700 mx-auto hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-2 px-4 py-2 rounded-2xl font-bold mb-2">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.login_img_section {\n  background: blue;\n  background: -webkit-linear-gradient(to left, #2c5364, #203a43, #0f2027);\n  background: linear-gradient(to left, #2c5364, #203a43, #0f2027);\n  border-radius: 8px;\n}\n",
        }}
      />
    </>
  );
};

export default Login;
