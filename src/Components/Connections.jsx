import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnectionSlice } from "../Utiles/connectionFeed";
import { BaseUrl } from "../Utiles/Constants";
import axios from "axios";

const Connections = () => {
  const dispatch = useDispatch();
  const myConnections = async () => {
    try {
      const res = await axios.get(BaseUrl + "/userrequest/accepted", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addConnectionSlice(res.data));
    } catch (error) {
      console.error("Error getting feed:", error.data);
    }
  };
  useEffect(() => {
    myConnections();
  }, []);
  const connectionUsers = useSelector(
    (store) => store?.connectionFeed?.connectionSlice
  );
  if (!connectionUsers)
    return (
      <>
        <p className=" text-center">No users</p>
      </>
    );
  return (
    <>
      <div className="flex gap-3 items-center justify-center">
        {connectionUsers &&
          connectionUsers.map((res) => {
            const { firstName, lastName, img_Url, skills } = res;
            return (
              <div key={res._id} className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                  <img src={img_Url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <div className=" flex gap-3">
                    {skills &&
                      skills.map((skill) => (
                        <span key={skill} className="badge badge-primary">
                          {skill}
                        </span>
                      ))}
                  </div>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Connections;
