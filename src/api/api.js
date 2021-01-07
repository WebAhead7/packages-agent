import { setItemLocal, getItemLocal } from "../hooks/localStorage";
import axios from "axios";

const testToken = getItemLocal("accessToken");

const local = "http://localhost:4000";

export const getAllPackages = async (setPackages, token) => {
  try {
    setPackages({
      isLoading: true,
      data: null,
    });

    const response = await fetch(`${local}/package/filtered_packages`, {
      method: "GET",
      headers: {
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

export const getAllPackagesByRadius = async (
  setPackages,
  radius,
  myLocation,
  token
) => {
  const options = {
    method: "POST",
    url: `http://localhost:4000/package/fr/${radius}`,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      latitude: myLocation.coords.latitude,
      longitude: myLocation.coords.longitude,
    }),
  };

  try {
    setPackages({
      isLoading: true,
      data: null,
    });

    const response = await fetch(options.url, options);

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

export const getAgentProfile = async (setAgentInfo, token) => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/agent/profile",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await fetch(options.url, options);

    setAgentInfo({
      isLoading: true,
      data: null,
    });

    const response = await res.json();

    setAgentInfo({
      isLoading: false,
      data: response,
    });
  } catch (e) {
    setAgentInfo({
      isLoading: false,
      data: null,
    });
  }
};

export const signUpApi = async (setAuth, data) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/agent/signup",
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

// Agent Buttons Fetch in Package screen

export const requestPackage = async (props) => {
  const options = {
    url: `${local}/agent/request_package/${props.businessId}/${props.packageId}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${props.token}`,
    },
    body: JSON.stringify({ status: "In proccess" }),
  };

  try {
    const response = await fetch(options.url, options);

    const res = await response.json();

    props.setRefresh((prev) => prev + 1);
  } catch (e) {
    console.log(e.message);
  }
};

export const getPackageStatus = async (token, packageId, setStatus) => {
  try {
    const response = await fetch(`${local}/agent/package_status/${packageId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${testToken}`,
      },
    });
    const res = await response.json();

    setStatus(res.status);
  } catch (err) {
    console.log(err);
  }
};

export const pickUp = async (props) => {
  const options = {
    url: `${local}/package/status/${props.businessId}/${props.packageId}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${props.token}`,
    },
    body: JSON.stringify({ status: "Waiting to be delivered" }),
  };

  try {
    const response = await fetch(options.url, options);

    const res = await response.json();

    props.setRefresh((prev) => prev + 1);
  } catch (e) {
    console.log(e.message);
  }
};

export const confirmOwner = async (props) => {
  const options = {
    url: `${local}/agent/confirm_pickup/${props.businessId}/${props.packageId}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${props.token}`,
    },
    body: JSON.stringify({
      status: "On transit",
      confirmation: props.confirmationCode,
    }),
  };

  try {
    const response = await fetch(options.url, options);

    const res = await response.json();

    props.setMessage(res.message);

    props.setRefresh((prev) => prev + 1);
  } catch (e) {
    console.log(e.message);
  }
};

export const confirmClient = async (props) => {
  const options = {
    url: `${local}/agent/confirm_delivery/${props.businessId}/${props.packageId}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${props.token}`,
    },
    body: JSON.stringify({
      status: "Delivered",
      confirmation: props.confirmationCode,
    }),
  };

  try {
    const response = await fetch(options.url, options);

    const res = await response.json();

    props.setRefresh((prev) => prev + 1);
    props.setMessage(res.message);
  } catch (e) {
    console.log(e.message);
  }
};

export const UpdateWaiting = async (props) => {
  const options = {
    url: `${local}/package/status/${props.businessId}/${props.packageId}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${props.token}`,
    },
    body: JSON.stringify({ status: "Waiting for confirmation" }),
  };

  try {
    const response = await fetch(options.url, options);

    const res = await response.json();

    props.setMessage(res.message);
    props.setRefresh((prev) => prev + 1);
  } catch (e) {
    console.log(e.message);
  }
};

export const getOnePackage = async (
  id,
  token,
  setCurrentPackage,
  currentPackage,
  setStatus
) => {
  const options = {
    method: "GET",
    "Content-Type": "application/json",
    url: `http://localhost:4000/agent/one_package/${id}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    setCurrentPackage({
      isLoading: true,
      isUpdating: false,
      data: null,
      error: null,
    });

    if (currentPackage.data) {
      setCurrentPackage({
        isLoading: false,
        isUpdating: true,
        data: currentPackage,
        error: null,
      });
    }

    const response = await fetch(options.url, options);

    setCurrentPackage({
      isLoading: true,
      isUpdating: false,
      data: null,
      error: null,
    });

    const data = await response.json();

    setStatus(data.status);

    setCurrentPackage({
      isLoading: false,
      isUpdating: false,
      data: data,
      error: null,
    });
  } catch (e) {
    setCurrentPackage({
      isLoading: false,
      isUpdating: false,
      data: null,
      error: e.message,
    });
  }
};
