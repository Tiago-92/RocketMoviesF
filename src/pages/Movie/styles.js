import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: grid;
    grid-template-areas:
    "header"
    "content";
    width: 100%;
    height: 100vh;
    
    > header {
        display: grid;
        grid-area: "header";
        align-items: center;

        padding-left: 123px;
        padding-right: 123px;
        
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

        display: flex;
        justify-content: space-between;
        gap: 64px;
        
        width: 100%;
        height: 116px;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    > button, .back {
        font-size: 16px;
        display: flex;
        width: 100px;
        height: 50px;
        border: 1px solid gray;
        

        margin-left: 123px;
        background: none;
        border: none;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        font-size: 16px;

        margin-top: 40px;
            
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 8px;
    }

    > main {
        width: 1137px;
        margin-left: 123px;
        margin-top: 24px;
       
        grid-area: "content";

        overflow-y: scroll;
        
        &::-webkit-scrollbar {
            background: transparent;
            width: 9px;
        }    
        
        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
            border: 1px solid transparent;
            border-radius: 15px;
        }    

        &::-webkit-scrollbar-track-piece {
            color: black;
        }
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 20px;
   

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;

export const AddMovie = styled(Link)`
    height: 56px;
    width: 207px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
        
    font-size: 16px;
        
    color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
        
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border: 1px solid transparent;
    border-radius: 8px;

    > svg {
        width: 20px;
        height: 20px;
    }
`;

export const Content = styled.div`
    width: 630px;
`;

export const Profile = styled.div`
    display: flex;
    gap: 15px;
    text-align: end;
    align-items: center;

    > div {
        > p {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
        > button {
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.GRAY};
         
        }
    }
    
    > button, a {
        background: none;
        border: none;

        > img {
            width: 64px;
            height: 64px;

            border-radius: 50%;
        }       
    }
`;    