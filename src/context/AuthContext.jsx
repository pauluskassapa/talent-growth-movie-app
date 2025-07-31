import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // ✅ Tambahkan ini

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true); // ✅ Update status login
    }
  }, []);

  const register = ({ username, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.username === username);
    if (exists) return { success: false, message: "User already exists" };

    const newUser = { username, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    return { success: true };
  };

  const login = ({ username, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find((u) => u.username === username && u.password === password);
    if (found) {
      setUser(found);
      setIsAuthenticated(true); // ✅ Tandai login
      localStorage.setItem("loggedInUser", JSON.stringify(found));
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false); // ✅ Tandai logout
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
