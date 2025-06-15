import { Navigate } from "react-router-dom";

const SecureRoutes = ({ children }: { children: React.ReactNode }) => {
    const accessToken = sessionStorage.getItem("access_token");

    if (!accessToken) {
        return <Navigate to="/login" replace={true} />
    }
    return <>{children}</>;
}

export default SecureRoutes