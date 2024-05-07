const { createContext, useContext, useState } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token") || "");
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }
    const isLoggedIn = !!token;
    console.log(isLoggedIn);
    const logout = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ storeTokenInLS, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth is user outside the  provider ")
    }
    return authContextValue;
}


export default AuthProvider;
export { AuthContext, useAuth }