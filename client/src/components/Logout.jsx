import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { logout } = useAuth();
    const navigate =  useNavigate();
    useEffect(() => {
        logout();
    }, [logout])
    return navigate("/");
}
export default Logout;