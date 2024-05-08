const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token") || "");
    const [user, setUser] = useState();

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }
    const isLoggedIn = !!token;
    // console.log(isLoggedIn);
    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
    }

    ///Jwt Autentication

    const userAutentication = async () => {
        try {
            const response = await fetch("/userme", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + token
                },
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setUser(data.userData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userAutentication();
    }, [userAutentication]);



    return (
        <AuthContext.Provider value={{ storeTokenInLS, logout, isLoggedIn, user }}>
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