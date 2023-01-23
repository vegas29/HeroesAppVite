import { types } from "../../../src/auth";
import { authReducer } from "../../../src/auth/context/authReducer";


describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({logged: false}, {});
        expect( state ).toEqual({ logged: false })

    });

    test('Debe de (login) llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Alejo',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });

    })

    test('Debe de (logout) borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Alejandro'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );
        expect( newState).toEqual({ logged: false});



    })
});