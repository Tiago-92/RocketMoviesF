
import { Input } from '../Input';

import { api } from '../../../../RocketMovies_backend/src/services/api';

import { useAuth } from '../../../hooks/auth';

import { Container, Section, Profile } from './styles';

import { Link } from "react-router-dom";

export function Header(){
   
    const { SignOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <h1>
                RocketMoveis
            </h1>

            <Section>
                <Input placeholder="Pesquisar pelo título"/>
            </Section>
            
            <Profile>
                <div>
                    <p>{user.name}</p>
                    <button 
                        type="button" 
                        onClick={SignOut}>
                        Sair
                    </button>
                </div>
                <button>
                    <Link to="/profile">
                        <img src={avatarUrl} 
                        alt={user.name}
                        />
                    </Link>
                </button>   
            </Profile>                        
        </Container>
    )
}

