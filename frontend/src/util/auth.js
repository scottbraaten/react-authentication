import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const storedExp = localStorage.getItem("expiration");
  const expDate = new Date(storedExp);
  const now = new Date();
  const duration = expDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  const duration = getTokenDuration();

  if (duration < 0) {
    return "EXPIRED";
  }
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
};
