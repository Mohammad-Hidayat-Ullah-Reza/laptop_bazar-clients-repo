import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useToken from "../../../hooks/useToken";

const providerGoogle = new GoogleAuthProvider();

const GoogleProvider = ({ value, from }) => {
  const { popUpSignIn } = useContext(AuthContext);
  const [createdGoogleUserEmail, setCreatedGoogleUserEmail] = useState("");
  const [token] = useToken(createdGoogleUserEmail);
  const navigate = useNavigate();

  if (token) {
    if (value === "SIGN UP") {
      navigate("/");
    } else {
      navigate(`${from}`);
    }
  }

  const handleGoogleSignIn = () => {
    popUpSignIn(providerGoogle)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setCreatedGoogleUserEmail(user.email);
        toast.success(`${value} WITH GOOGLE SUCCESSFUL`);
        const buyer = "buyer";
        handlefindUser(user.email, user, buyer);
      })
      .catch((e) => console.log(e));
  };

  const handlefindUser = (email, user, buyer) => {
    fetch(`https://laptop-bazar-server-one.vercel.app/users/buyer/${email}`)
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

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://laptop-bazar-server-one.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {})
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
