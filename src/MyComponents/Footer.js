import React from 'react'
import './footer.css'

export const Footer = () => {
    let footerClass = {
        position: 'relative',
        width: '100%',
        top: '100vh'
    };
    return (
        <footer className="bg-dark text-light py-3" style={footerClass}>
            <p className="text-center">
            Copyright &copy; 2021. All rights Reserved
            </p>            
        </footer>
    )
}
