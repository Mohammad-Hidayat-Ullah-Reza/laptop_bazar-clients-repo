import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-3xl font-bold m-10 text-center text-blue-900">{`This is dashboard of ${user?.displayName}`}</div>
  );
};

export default Dashboard;
