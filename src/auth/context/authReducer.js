import { types } from "../types/types";

// const state = {
//     name: 'Alejandro',
//     logged: true
// }

export const authReducer = (state = {}, action) =>{
    switch (action.type) {
        case types.login:
            return{
                ...state,
                name: action.payload,
                logged: true
            }

        case types.logout:
            return{
                logged:false
            }    
    
        default:
            return state;
    }
}