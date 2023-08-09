import { useQuery } from "@tanstack/react-query";
import { URL } from "../util/url";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { EventHandler } from "../App";

const fetchAccountDetails = async (token) => {
  console.log("Fetching account details", token);
  const f = await fetch(URL("account"), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await f.json();
  return data;
};

export const useAccount = () => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoading, data, refetch } = useQuery(
    ["account", token],
    () => fetchAccountDetails(token),
    {
      enabled: !!token,
    }
  );

  useEffect(() => {
    if (data && data?.user?.id) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [data, token]);

  const logout = async () => {
    console.log("Logging out");
    setToken(null);
    await SecureStore.deleteItemAsync("token");
    refetch();
  };

  useEffect(() => {
    SecureStore.getItemAsync("token").then((storedToken) => {
      setToken(storedToken);
      refetch(storedToken);
      console.log("refetching");
      console.log("Token set to", storedToken);
    });
  }, []);

  useEffect(() => {
    console.log({
      token,
      isLoggedIn,
      isLoading,
      data,
    });
  }, [token, isLoggedIn, isLoading, data]);

  return {
    loading: isLoading,
    isLoggedIn: isLoggedIn,
    user: data,
    logout,
    refetch: async () => {
      console.log("Refetching account details!");
      await SecureStore.getItemAsync("token").then((storedToken) => {
        setToken(storedToken);
        console.log("Token set to", storedToken);
      });
      refetch();
    },
  };
};
