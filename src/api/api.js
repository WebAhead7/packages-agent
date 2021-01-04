import { setItemLocal, getItemLocal } from "../hooks/localStorage";

const local = "http://localhost:4000";

export const addBusiness = async (values, token, setAuth, setIsBusiness) => {
  const options = {
    url: `${local}/business`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  };

  try {
    const response = await fetch(options.url, options);

    const res = await response.json();

    if (res) {
      setAuth({
        isAuth: true,
        error: null,
        token: res.accessToken,
        isLoading: false,
      });

      setItemLocal("accessToken", res.accessToken);

      setIsBusiness(true);
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const getAllPackages = async (setPackages, token) => {
  try {
    setPackages({
      isLoading: true,
      data: null,
    });

    const response = await fetch(`${local}/package/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    setPackages({
      isLoading: true,
      data: null,
    });

    const res = await response.json();

    setPackages({
      isLoading: false,
      data: res,
    });
  } catch (err) {
    console.log(err);
    setPackages({
      isLoading: false,
      data: null,
    });
  }
};

export const getOwnerProfile = async (setOwnerInfo, token) => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/owner/profile",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await fetch(options.url, options);

    setOwnerInfo({
      isLoading: true,
      data: null,
    });

    const response = await res.json();

    setOwnerInfo({
      isLoading: false,
      data: response,
    });
  } catch (e) {
    setOwnerInfo({
      isLoading: false,
      data: null,
    });
  }
};

export const signUpApi = async (setAuth, data) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/owner/signup",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const res = await fetch(options.url, options);

    setAuth({
      isAuth: false,
      error: null,
      token: null,
      isLoading: true,
    });

    const response = await res.json();

    if (response.accessToken) {
      setAuth({
        isAuth: true,
        error: null,
        token: response.accessToken,
        isLoading: false,
      });

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

export const addClient = async (values, token, handleClose) => {
  const options = {
    url: `${local}/business/addclient`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  };

  try {
    const response = await fetch(options.url, options);

    const res = await response.json();

    if (res.status === 201) {
      handleClose();
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const addPackage = async (values, token) => {
  const options = {
    url: `${local}/package/add`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  };

  try {
    const response = await fetch(options.url, options);

    const res = await response.json();

    if (res) {
      console.log(res);
    }
  } catch (e) {
    console.log(e.message);
  }
};
