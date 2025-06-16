import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const SecureRoutes = ({ children }: { children: React.ReactNode }) => {
    // const accessToken = sessionStorage.getItem("access_token");
    const accessToken = useAuthStore((state) => state.accessToken);

    if (!accessToken) {
        console.log(accessToken)
        return <Navigate to="/login" replace={true} />
    }
    return <>{children}</>;
}

export default SecureRoutes