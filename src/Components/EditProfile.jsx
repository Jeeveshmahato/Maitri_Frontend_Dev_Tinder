import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import { BaseUrl } from "../Utiles/Constants";
import { addLoginUser } from "../Utiles/userAuthSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.userAuth?.loginDetails);
  console.log(user);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [img_Url, setimg_Url] = useState(user?.img_Url || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [skills, setSkills] = useState(user?.skills || []);

  const update = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        BaseUrl + "/profile/edit",
        {
          firstName,
          lastName,
          img_Url,
          age,
          gender,
          skills,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Profile updated successfully:", res.data);
      dispatch(addLoginUser(res.data));
    } catch (error) {
      console.error("Error:", error.response);
    }
  };
  return (
    <>
      <div className="flex  items-center justify-center gap-4">
        <div class="p-6 pt-0 w-full">
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
                      name="img_Url"
                      value={img_Url}
                      onChange={(e) => {
                        setimg_Url(e.target.value);
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
                      Age
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="String"
                      name="img_Url"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
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
                      Gender
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="String"
                      name="img_Url"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
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
                      Skills
                    </label>
                  </div>
                  <div className="flex flex-col items-start mt-2">
                    {skills &&
                      skills.map((skill, index) => (
                        <input
                          key={index}
                          type="text"
                          value={skill}
                          onChange={(e) => {
                            const updatedSkills = [...skills];
                            updatedSkills[index] = e.target.value;
                            setSkills(updatedSkills);
                          }}
                          class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="text-red-600 mt-3">{errorCred}</p> */}

            <div class="mt-4 flex items-center justify-end gap-x-2">
              <button
                class="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                type="submit"
                onClick={(e) => update(e)}
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="w-full flex items-center justify-center">
          <UserCard
            users={{ firstName, lastName, img_Url, age, gender, skills }}
          />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
