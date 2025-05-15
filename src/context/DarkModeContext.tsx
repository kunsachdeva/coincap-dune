"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
const isDarkModeInitial = false;
const DarkModeContext = createContext({
  contextValue: isDarkModeInitial,
  setContextValue: (input: boolean) => {
    console.log(input);
  },
});
type Props = {
  children: ReactNode;
};

function DarkModeContextProvider({ children }: Props) {
  const [contextValue, setContextValue] = useState(isDarkModeInitial);
  useEffect(() => {
    setContextValue(window.localStorage.getItem("isDarkMode") === "true");
  }, []);
  return (
    <DarkModeContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContextProvider, DarkModeContext };
