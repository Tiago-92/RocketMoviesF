import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from "./styles";

import { FiArrowLeft } from 'react-icons/fi';

import { api } from '../../../../RocketMovies_backend/src/services/api';

import { Header } from "../../components/Header";

import { Details } from '../../components/Details';

export function Movie() {
    const [notes, setNotes] = useState([]);

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1)
    }
    
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }
        
        fetchNotes();
    }, [search]);

    return(
        <Container>
            <Header />
            <button type="button" onClick={handleBack}>                
                    <FiArrowLeft />
                    Voltar  
            </button>
            <main>
                {
                    notes.map(details => (
                        <Details
                            key={String(details.id)}
                            data={details}
                        />
                    )) 
                }
            </main>
        </Container>
    );
}