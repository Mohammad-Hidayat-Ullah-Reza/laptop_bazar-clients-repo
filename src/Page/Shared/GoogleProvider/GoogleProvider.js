import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const providerGoogle = new GoogleAuthProvider();

const GoogleProvider = ({ value }) => {
  const { popUpSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    popUpSignIn(providerGoogle)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`${value} WITH GOOGLE SUCCESSFUL`);
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
