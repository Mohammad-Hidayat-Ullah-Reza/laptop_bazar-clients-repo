import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const providerGoogle = new GoogleAuthProvider();

const GoogleProvider = ({ value, saveUser, from }) => {
  const [foundUser, setFoundUser] = useState(false);
  const { popUpSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // const { data: buyers = [] } = useQuery({
  //   queryKey: ["buyers"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/users/buyer`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const handleGoogleSignIn = () => {
    popUpSignIn(providerGoogle)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`${value} WITH GOOGLE SUCCESSFUL`);
        const buyer = "buyer";
        handlefindUser(user.email, user, buyer);
        if (value === "SIGN UP") {
          navigate("/");
        } else {
          navigate(`${from}`);
        }
      })
      .catch((e) => console.log(e));
  };

  const handlefindUser = (email, user, buyer) => {
    fetch(`http://localhost:5000/users/buyer/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.length > 0) {
          if (saveUser) {
            saveUser(user.displayName, user.email, buyer);
          }
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-block btn-warning"
      >
        <FaGoogle className="mr-2"></FaGoogle>
        <span>{value} With Google</span>
      </button>
    </div>
  );
};

export default GoogleProvider;
