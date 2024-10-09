import React, { useState, useMemo } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [reloadByFilter, setReloadByFilter] = useState(false);
  const [searchDatas, setSearchDatas] = useState({});

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      reloadByFilter,
      setReloadByFilter,
      searchDatas,
      setSearchDatas,
    }),
    [reloadByFilter, searchDatas]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
