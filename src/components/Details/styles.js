import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;

    > h1 {
        display: flex;
        align-items: center;
        gap: 23px;
                
        font-size: 36px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        > div {
            margin-top: 10px;

            }
        }

    > .Profile {
        display: flex;
        gap: 8px;
        align-items: center;

        margin-top: 24px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 16px;

        > img {
            width: 16px;
            height: 16px;
            border: 1px solid gray;
            border-radius: 50%;
        }
    }

    > .Description {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > .Tag {
        margin: 40px 0;
    }

    > button {
        background: none;
        border: none;

        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

        margin-top: 35px;

        width: 110px;
        display: flex;
        justify-content: start;;
    }

   
`;