import { Container } from './styles';

import { useAuth } from '../../../hooks/auth';

import { api } from '../../../services/api';

import { Tag } from '../../components/Tag';

import { Rating } from '../../components/Rating';

import { HiOutlineClock } from 'react-icons/hi';

export function Details({ data, ...rest}) {
    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container {...rest}>
            <h1>
                {data.title}
                <div>
                    <Rating rating={data.rating} />
                </div>
            </h1>

            <div className="Profile">
                <img src={avatarUrl} alt={user.name}/>
                    <p>Por {user.name}</p>
                    <HiOutlineClock />
                    {data.created_at}
            </div>

            {
                data.movie_tags &&
                <div className="Tag">
                    {
                        data.movie_tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </div>
            }

            <p className="Description">
                {data.description}
            </p>
        </Container>  
    );
}