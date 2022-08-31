import styled from 'styled-components';

export const Container = styled.div`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    height: 116px;

    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    > h1 {
        margin-left: 123px;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    }
`;

export const Section = styled.div`
    width: 630px;
`;

export const Profile = styled.div`
    display: flex;
    gap: 15px;    
    align-items: center;
    
    text-align: end;

    width: 300px;

    > button, a {
        background: none;
        border: none;
            > img {
            width: 64px;
            height: 64px;

            border: 1px solid gray;
            border-radius: 50%;
        }
    }

    > div {
        > button {
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    > div p {
        display: flex;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
        
    
    > div p, div {
        font-size: 14px;
    }
`;
