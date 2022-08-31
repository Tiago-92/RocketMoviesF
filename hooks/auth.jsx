import { createContext, useContext, useEffect, useState } from "react";

import { api } from '../../RocketMovies_backend/src/services/api'

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const [data, setData] = useState({});

    async function sigIn({email, password}) {

        try {

            const response = await api.post("/sessions", { email, password});
            const { user, token } = response.data

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 

            setData({ user, token});

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            }else{
                alert("Não foi possível entrar.")
            }
            
        }
    }

    async function updateProfile({ user, avatarFile }) {
    
        try {

            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);
                
                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            setData({ user, token: data.token });
            alert("Perfil atualizado!")
        
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }       
    }

    function SignOut() {
        localStorage.removeItem("@rocketmovies:user");
        localStorage.removeItem("@rocketmovies:token");

        setData({});
    }

    useEffect(() =>{ // carrega user e token armazenados no localStorage quando a página for renderizada 
        const user = localStorage.getItem("@rocketmovies:user");
        const token = localStorage.getItem("@rocketmovies:token");

        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
            
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{ 
            sigIn,
            SignOut,
            updateProfile, 
            user: data.user 
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }