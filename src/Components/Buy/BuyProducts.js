import React from "react";
import { useAuth } from "../../context/AuthContext";
import Login from "../Auth/Login";
import Buy from "./Buy";

const Auth = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <>
          {alert("Зарегайся")}
          <Login />
        </>
      ) : (
        <Buy />
      )}
    </div>
  );
};

export default Auth;
