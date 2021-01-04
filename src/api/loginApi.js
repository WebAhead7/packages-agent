import axios from "axios";

import { setItemLocal, getItemLocal } from "../hooks/localStorage";

export const ownerLogin = async (loginInfo, setAuth, setOwnerInfo) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/owner/login",
    headers: { "Content-Type": "application/json" },
    data: { loginInfo },
  };

  try {
    const res = await fetch(options.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    });

    setAuth({
      isAuth: false,
      error: null,
      token: null,
      isLoading: true,
    });

    const response = await res.json();

    if (response.owner) {
      setAuth({
        isAuth: true,
        error: null,
        token: response.accessToken,
        isLoading: false,
      });

      setOwnerInfo(response.owner);

      setItemLocal("accessToken", response.accessToken);
    }
  } catch (e) {
    setAuth({
      isAuth: false,
      error: e.message,
      token: null,
      isLoading: false,
    });
  }
};
