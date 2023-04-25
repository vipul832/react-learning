import { createContext, ReactNode, useContext, useState } from "react";

type Context = {
  user: string;
  login: Function;
  logout: Function;
};

const AuthContext = createContext<Context | null>(null);

type AuthProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState("");

  const login = (user: string) => {
    setUser(user);
  };
  const logout = () => {
    setUser("");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
