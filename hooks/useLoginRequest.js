import { URL } from "../util/url";
import * as SecureStore from "expo-secure-store";
import { EventHandler } from "../App";
import { useAccount } from "./useAccount";
import { useState } from "react";

const loginRequest = async ({ email, password }) => {
  const f = await fetch(URL("account/login"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const statusCode = f.status;
  const response = await f.json();

  if (statusCode === 200) {
    return response;
  } else {
    // Create an error object with the error message
    const error = new Error(response.message || "Login failed");
    error.status = statusCode;
    throw error;
  }
};

export const useLoginRequest = (onLogin) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const login = async ({ email, password }) => {
    setLoading(true);
    let d;
    try {
      d = await loginRequest({ email, password });
      console.log("Login response", d);
      if (d.token) {
        await SecureStore.setItemAsync("token", d.token);
        setData(d);
        onLogin && onLogin();
        setError(null);
      } else {
        setError(d.message || "Login failed");
      }
    } catch (error) {
      console.log("error", error);
      setError(error.message);
    }
    setLoading(false);
    return d;
  };

  return {
    mutate: login,
    isLoading: loading,
    data,
    error,
  };
};
