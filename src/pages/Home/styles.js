import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
   
    height: 100vh;
    display: grid;

    width: 100%;

    margin-right: 106px;
    grid-template-areas:
    "header"
    "content";

    > header {
        > h1 {
            font-size: 24px;
        }

        display: grid;
        grid-area: "header";
        align-items: center;

        padding-left: 123px;
        padding-right: 123px;
        
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

        display: flex;
        justify-content: space-between;
        gap: 60px;
        
        width: 100%;
        height: 116px;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    > main {
        display: grid;

        width: 1129px;
        margin-right: 106px;
        margin-left: 123px;

        grid-area: "content";
        overflow-y: auto;
        
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

    width: 1129px;

    margin: 50px 123px;

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
    gap: 10px;
    flex-direction: row;
    align-items: center;

    text-align: end;

    > div {
        > p {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 14px;
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