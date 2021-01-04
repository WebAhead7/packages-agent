import { useEffect, useState } from "react";

const PREFIX = "packages-owner-";

export const setItemLocal = (key, initialValue) => {
  const prefixedKey = `${PREFIX}${key}`;
  localStorage.setItem(prefixedKey, JSON.stringify(initialValue));
  return;
};

export const getItemLocal = (key) => {
  const prefixedKey = `${PREFIX}${key}`;

  const getLocalStorage = localStorage.getItem(prefixedKey);
  return JSON.parse(getLocalStorage);
};

export const removeItemLocal = (key) => {
  const prefixedKey = `${PREFIX}${key}`;

  localStorage.removeItem(prefixedKey);
  return;
};
