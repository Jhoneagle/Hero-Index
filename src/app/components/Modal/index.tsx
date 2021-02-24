import React from 'react'
import Togglable from "./Togglable"

interface IModalProps {
    children: React.ReactElement
    buttonLabel: string
}

export const Modal: React.FC<IModalProps> = ({ children, buttonLabel }) => {
    const blogFormRef = React.createRef<void>()

    return (
        <Togglable buttonLabel={buttonLabel} ref={blogFormRef}>
            {children}
        </Togglable>
    )
}
