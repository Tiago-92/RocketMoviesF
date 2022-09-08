import { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import { Note } from '../../components/Note';

import { Container, Content, Profile, Section, AddMovie } from './styles';

import { Input } from '../../components/Input';

import { FiPlus} from 'react-icons/fi';

import { Link } from "react-router-dom";

import { api } from "../../../../RocketMovies_backend/src/services/api";

import { useAuth } from '../../../hooks/auth';


export function Home() {
    const { SignOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);
      
    const [search, setSearch] = useState("");


    function handleDetails() {
        navigate("/movie");
    }
 
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data)
        }
                
        fetchNotes();
    }, [search])
    
    return(
        <Container>          
                <header>
                        <h1>RocketMovies</h1>
                        <Content>
                            <Input
                                placeholder="Pesquisar por título"
                                onChange={(e) => setSearch(e.target.value)} 
                            />
                        </Content>

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
                </header>
                    <Section className="section">
                        <h2>Meus Filmes</h2>

                        <AddMovie to="/createM">
                            <FiPlus />
                            Adicionar filme
                        </AddMovie>
                    </Section>
                    <main>
                        {
                            notes.map(note => (
                                <Note
                                    key={String(note.id)}
                                    data={note}
                                    onClick={handleDetails}
                                />
                            )) 
                        }
                    </main>
        </Container>   
    )
}