import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import HttpInterceptor from "../lib/HttpInterceptor";
import Context from "./Context";

const Guard = () => {
  const { session, setSession } = useContext(Context);

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data } = await HttpInterceptor.get("/auth/session");

        setSession(data);

        // setAuthenticated(true);
      } catch (error) {
        setSession(false);
      }
    };

    getSession();
  }, []);

  if (session === null) {
    return null;
  }

  if (session === false) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Guard;
