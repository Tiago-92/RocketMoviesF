import { useState } from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Contaneir, Form, Background } from './styles';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    function handleSignUp() {
        console.log(name, email, password)
    }


    return(
        <Contaneir>
            <Form>    
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                <h2>Crie sua Conta</h2>

                <Input 
                    type="text"
                    icon={FiUser}
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)} 
                />

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

                <Button title="Cadastrar" onClick={handleSignUp} />

                <button className="back">
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para o login
                    </Link>   
                </button>         
            </Form>
        <Background />
    </Contaneir>
            
    )
}