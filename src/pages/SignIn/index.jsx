import { useState } from 'react';

import { useAuth } from '../../../hooks/auth';

import { FiMail, FiLock } from 'react-icons/fi';

import { Contaneir, Form, Background } from './styles';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

export function SignIn() {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { sigIn } = useAuth();

    function handleSignIn() {
        sigIn({ email, password })
    }

    return(
        <Contaneir>
            <Form>    
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                <h2>Faça seu Login</h2>

                <Input 
                    type="email"
                    icon={FiMail}
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)} 
                />

                <Input 
                    type="password"
                    icon={FiLock}
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}               
                />
                    
                <Button title="Entrar" onClick={handleSignIn}/>

                <button className="createAccount">
                    <Link to="/register">
                        Criar Conta
                    </Link>
                </button>
                
            </Form>
        <Background />
    </Contaneir>
            
    )
}