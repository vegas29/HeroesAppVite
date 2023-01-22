import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: false
    }

    const [ authState, dispatch ] = useReducer(authReducer, initialState);

    const login = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name
            }
        }

        dispatch(action);
    }
    
    return (
        <AuthContext.Provider value={{
            ...authState,
            login
        }}>
            { children }
        </AuthContext.Provider>
    )
}
