import styled from "styled-components";

export const Container = styled.div`
    > span {
        > svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        }
    }
`;