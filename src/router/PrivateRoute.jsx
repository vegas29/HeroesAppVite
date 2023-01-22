import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router';
import { useContext } from 'react';

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    return ( logged )
        ? children
        : <Navigate to="/login" />
}
