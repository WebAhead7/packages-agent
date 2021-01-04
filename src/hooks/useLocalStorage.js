import { useEffect, useState } from "react";

const PREFIX = "packages-owner-";

export const useLocalStorage = (method, key, initialValue) => {
  const prefixedKey = `${PREFIX}${key}`;

  if (method === "get") {
    const getLocalStorage = localStorage.getItem(prefixedKey);
    return JSON.parse(getLocalStorage);
  }

  if (method === "set") {
    localStorage.setItem(prefixedKey, JSON.stringify(initialValue));
  }

  return;
};
