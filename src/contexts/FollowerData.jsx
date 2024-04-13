import React, { useState, createContext } from "react";

export const FollowerContext = createContext();

export const FollowerProvider = ({ children }) => {
  const [followerData, setFollowerData] = useState({
    data: "",
    text: "",
  });

  return (
    <FollowerContext.Provider value={{ followerData, setFollowerData }}>
      {children}
    </FollowerContext.Provider>
  );
};
