import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const SecureRoutes = ({ children }: { children: React.ReactNode }) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (!accessToken) {
        return <Navigate to="/login" replace={true} />
    }
    return <>{children}</>;
}

export default SecureRoutes