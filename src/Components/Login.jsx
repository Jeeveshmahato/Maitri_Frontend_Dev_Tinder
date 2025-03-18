import axios from "axios";
import React, { useState } from "react";
import { addLoginUser } from "../Utiles/userAuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../Utiles/Constants";

const Login = () => {
  const [email, setEmail] = useState("Rounit@gmail.com");
  const [password, setPassword] = useState("Rounit");
  const [errorCred, setErrorCred] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        BaseUrl + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addLoginUser(response.data));
      // console.log(response.data);
      navigate("/");
    } catch (error) {
      setErrorCred(error.response.data);
      // console.log(error);
    }
  };
  return (
    <>
      <div>
        <div class="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
          <a href="#">
            <div class="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                  />
                </svg>
              </div>
              Tinder Dev
            </div>
          </a>
          <div class="relative mt-12 w-full max-w-lg sm:mt-10">
            <div
              class="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
              bis_skin_checked="1"
            ></div>
            <div class="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
              <div class="flex flex-col p-6">
                <h3 class="text-xl font-semibold leading-6 tracking-tighter">
                  Login
                </h3>
                <p class="mt-1.5 text-sm font-medium text-white/50">
                  Welcome back, enter your credentials to continue.
                </p>
              </div>
              <div class="p-6 pt-0">
                <form>
                  <div>
                    <div>
                      <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div class="flex justify-between">
                          <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                            Email
                          </label>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          autocomplete="off"
                          class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div>
                      <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div class="flex justify-between">
                          <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                            Password
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-red-600 mt-3">{errorCred}</p>
                  <div class="mt-4 flex items-center justify-between">
                    <label class="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="remember"
                        class="outline-none focus:outline focus:outline-sky-300"
                      />
                      <span class="text-xs">Remember me</span>
                    </label>
                    <a
                      class="text-sm font-medium text-foreground underline"
                      href="/forgot-password"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div class="mt-4 flex items-center justify-end gap-x-2">
                    <a
                      class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                      href="/register"
                    >
                      Register
                    </a>
                    <button
                      class="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                      type="submit"
                      onClick={(e) => handleLogin(e)}
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
