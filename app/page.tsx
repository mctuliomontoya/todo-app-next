"use client";
import React from "react";

import Image from "next/image";

export default function Home() {
  const [isInputValueVisible, setIsInputValueVisible] = React.useState(false);

  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible);
  };

  return (
    <main className="bg-ui-base-300 h-screen flex w-full items-center justify-center">
      <section className="back w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-ui-base-300 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="w-full flex flex-col items-center justify-center">
                <a
                  href="#"
                  className="flex items-center text-4xl font-extrabold text-bone"
                >
                  the todo app.
                </a>
                <h1 className="text-2xl mt- font-extrabold text-bone md:text-xl">
                  Sign in to your account
                </h1>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="bg-ui-base-200 rounded-lg appearance-none -space-y-px">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="appearance-none  text-bone rounded-none relative block w-full px-3 py-2 border border-ui-base-300 placeholder:text-ui-grey-300 bg-ui-base-200 rounded-t-md focus:outline-none focus:ring-0 focus:z-10 focus:border-brand-purple  sm:text-sm"
                    placeholder="name@company.com"
                    required={true}
                  />
                  <div className="flex flex-row border border-ui-base-300 pr-3 items-center">
                    <input
                      type={isInputValueVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="password"
                      className="appearance-none text-bone rounded-none relative block w-full px-3 py-2  placeholder:text-ui-grey-300 bg-ui-base-200  rounded-b-md focus:outline-none focus:ring-0 focus:z-10 focus:border-brand-purple  sm:text-sm"
                      required={true}
                    />
                    <button
                      type="button"
                      className="bg-[#383533] size-[25px] flex items-center justify-center rounded-xl"
                      onClick={handleToggleVisibility}
                    >
                      {isInputValueVisible ? "🙊" : "🙈"}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-end">
                    <a
                      href="#"
                      className="w-full text-sm font-light text-bone hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-bone bg-ui-base-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-brand-purple font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
