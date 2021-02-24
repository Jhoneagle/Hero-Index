import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 20px;
    flex: 0.8;
`;

interface IRowsContainerProps {
    children: React.ReactElement[]
}

export const RowsContainer: React.FC<IRowsContainerProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
