import styled from 'styled-components';
import React, { useState, useImperativeHandle } from 'react'

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
	align-items: center;
    padding: 10px;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
	align-items: center;
`;

const StyledButton = styled.button`
    border: none;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    width: 90px;
    height: 55px;
    border-radius: 95%;
`;

const OpenButton = styled(StyledButton)`
    background-color: #208110;
    :hover {
        background-color: #006400;
    }
`;

const CancelButton = styled(StyledButton)`
    background-color: #dc143c;
    :hover {
        background-color: #d12341;
    }
`;

interface ITogglableProps {
    children: React.ReactElement
    buttonLabel: string
    ref: React.ForwardedRef<void>
}

const Togglable: React.FC<ITogglableProps> = ({ children, buttonLabel, ref }) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <Container>
            <InnerContainer style={hideWhenVisible}>
                <OpenButton onClick={toggleVisibility}>{buttonLabel}</OpenButton>
            </InnerContainer>
            <InnerContainer style={showWhenVisible}>
                <CancelButton onClick={toggleVisibility}>Close</CancelButton>
                {children}
            </InnerContainer>
        </Container>
    )
}

Togglable.displayName = 'Togglable'

export default Togglable
