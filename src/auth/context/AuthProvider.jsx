import React from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'


import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

// const initialState = {
//     logged: false,
// }

const init=()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    return{
        logged: !!user,
        user: user
    }
}
export const AuthProvider = ({children}) => {

    // [estado, dispatch] = useReducer(reducer, initialState);
    /*  estado: estado base;
        dispatch: función que se usa para actualizar el estado;

        reducer: función de JS que actualiza el estado;
        initialState: estado inicial;

        Este hook devuelve un array donde donde la posición cero es el estado y en la posición uno es el dispatch

        Un reducer es una función de Javascript que recibe por parámetro el valor del estado actual y por segundo parámetro un objeto plano de Javascript llamado action con la información necesaria para actualizar el estado.

        function reducer(state, action) {
            switch (action.type) {
                case 'increment':
                    return {count: state.count + 1};
                case 'decrement':
                    return {count: state.count - 1};
            default:
                throw new Error();
            }
        }

        Como podemos ver, el reducer recibe el valor del estado y un action.

        El parámetro action es un objeto plano de Javascript y tendrá por lo menos una propiedad llamada type que usamos como una cadena, ejemplo: { type: 'ADD_TODO' }

        
    */
    const [authState, dispatch] = useReducer(authReducer, /*initialState*/ {}, init);
    
    const onLogin = (name= '' )=>{
        const user = {id: 'ABC', name}
        const action = { 
            // Acá le estoy diciendo en el type, que elija el caso de login
            type: types.login,
            payload: user,
        }

        localStorage.setItem('user', JSON.stringify(user))
        // Acá le envío al dispatch el objeto del action cuando se ejecute la función onLogin
        dispatch(action)
    }

    const logout = ()=>{
        localStorage.removeItem('user');
        const action = {
            type: types.logout,

        };
        dispatch(action)
    }
    console.log(authState)
  return (
    <AuthContext.Provider value={{
        ...authState,
        // El login es la propiedad de value que mando, que va a ser recibida en el LoginPage, de este recibo el nombre y se lo envía a la función onLogin(name)
        login: onLogin,
        logout: logout
     }}>
        {children}

    </AuthContext.Provider>
  )
}
