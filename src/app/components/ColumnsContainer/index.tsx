import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

interface IColumnsContainerProps {
    children: React.ReactElement[]
}

export const ColumnsContainer: React.FC<IColumnsContainerProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
