import { Container } from './styles';

export function Textarea({ onClick, ...rest }) {
    return(
        <Container 
            placeholder="Descrição do filme"
            {...rest}
        >    
        </Container>
    )
}