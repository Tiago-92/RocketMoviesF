import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from '../../../services/api';

import { Container, Form, Back } from "./styles";

import { Header } from "../../components/Header";

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

import { ButtonB } from "../../components/ButtonB";

import { NoteItem } from "../../components/NoteItem";

import { Textarea } from "../../components/Textarea";

import { FiArrowLeft } from "react-icons/fi";

export function CreateMovie(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    async function handleAddNote() {

        if(!title) {
            return alert("Digite o título!")
        }

        if(!description) {
            return alert("Digite a nota do filme!")
        }

        if(!rating) {
            return alert("Digite a descrição do filme!")
        }
        
        await api.post("/notes", {
            title,
            description,
            rating,
            tags,
        });

        alert("Novo filme criado com sucesso!")
        navigate(-1);
    }

    function handleBack() {
        navigate("/");
    }

    function handleAddTags() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tags !== deleted));
    }

    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <Back onClick={handleBack}>
                        <FiArrowLeft />
                        Voltar
                    </Back>
                    <h1>
                        Novo Filme
                    </h1>
                    <section>
                        <Input 
                            type="text"
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input 
                            type="text"
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </section>

                    <Textarea
                        type="text"
                        placeholder="Descrição"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <h2>Marcadores</h2>

                    <div className="tags">
                        {
                            tags.map((tag, index) =>(
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }

                        <NoteItem 
                            isNew
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTags}
                        />
                    </div>

                    <footer>
                        <ButtonB 
                            title="Excluir filme"/>
                        <Button 
                            title="Salvar alterações"
                            onClick={handleAddNote} 
                        />
                    </footer>   
                </Form>
            </main>
        </Container>
    )
}