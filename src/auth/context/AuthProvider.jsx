import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

export const AuthProvider = ({ children }) => {

    // const initialState = {
    //     logged: false
    // }

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        return {
            logged: !!user,
            user
        }
    }

    const [ authState, dispatch ] = useReducer(authReducer, {}, init);

    const login = ( name = '' ) => {

        const user = { id: crypto.randomUUID(), name };

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {

        const action = {
            type: types.logout
        }

        dispatch(action);

        localStorage.removeItem('user');
    }
    
    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}
