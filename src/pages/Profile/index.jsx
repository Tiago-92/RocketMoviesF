import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/auth";

import { api } from "../../../../RocketMovies_backend/src/services/api"

import { Container, Avatar, Form, Back } from './styles';

import avatarPlaceholder from "../../assets/avatarPlaceholder.png"

import { FiCamera, FiLock, FiMail, FiUser, FiArrowLeft} from 'react-icons/fi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName ] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState("");
    const [passwordNew, setPasswordNew] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    async function handleUpdate() {
        const updated = {
            name,
            email,
            new_password: passwordNew,
            old_password: passwordOld
        }

        const userUpdate = Object.assign(user, updated)

        await updateProfile({ user: userUpdate, avatarFile })  
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);
        
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return(
        <Container>
            <header>
                <Back onClick={handleBack}>
                    <FiArrowLeft />
                    Voltar
                </Back>
            </header>           
            <Form>
                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar} 
                        />
                    </label>    
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password" 
                    icon={FiLock}
                    onChange={(e) => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>    
    );
}