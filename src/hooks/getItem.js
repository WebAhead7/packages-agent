import { useEffect, useState } from "react";

const PREFIX = "packages-owner-";

export const getItemLocal = (key) => {
  const prefixedKey = `${PREFIX}${key}`;

  const getLocalStorage = localStorage.getItem(prefixedKey);
  return JSON.parse(getLocalStorage);
};
