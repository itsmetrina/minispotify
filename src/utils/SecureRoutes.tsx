import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface ChildProp {
    children: JSX.Element;
}

const SecureRoutes = ({ children }: ChildProp) => {
    const accessToken = sessionStorage.getItem('access_token');
    
    if (!accessToken) {
        return <Navigate to='/login' replace={true} />
    }
    return children;
}

export default SecureRoutes