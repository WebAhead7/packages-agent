import axios from "axios";

import { setItemLocal, getItemLocal } from "../hooks/localStorage";

export const agentLogin = async (loginInfo, setAuth, setAgentInfo) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/agent/login",
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

    if (response.agent) {
      setAuth({
        isAuth: true,
        error: null,
        token: response.accessToken,
        isLoading: false,
      });

      setOwnerInfo(response.agent);

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
