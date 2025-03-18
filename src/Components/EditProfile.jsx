import React, { useState } from "react";

const EditProfile = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [skills, setSkills] = useState("")
  return (
    <>
      <div className="flex  items-center justify-center gap-4">
      <div class="p-6 pt-0">
                <form>
                  <div>
                    <div>
                      <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div class="flex justify-between">
                          <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                            FirstName
                          </label>
                        </div>
                        <input
                          type="String"
                          name="firstName"
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
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
                            lastName
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            type="String"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                            class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div>
                      <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                        <div class="flex justify-between">
                          <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                           Image
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            type="String"
                            name="imgUrl"
                            value={imgUrl}
                            onChange={(e) => {
                              setImgUrl(e.target.value);
                            }}
                            class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <p className="text-red-600 mt-3">{errorCred}</p> */}
                  
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
                    //   onClick={(e) => handleLogin(e)}
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
      </div>
    </>
  );
};

export default EditProfile;
