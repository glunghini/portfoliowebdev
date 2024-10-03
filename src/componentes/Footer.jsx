import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black p-6 w-full shadow-2xl">
            <div className="flex justify-between items-center h-full mx-auto w-3/4">
                <h1 className="text-lg md:text-xl font-bold">Desenvolvido por Guilherme Lunghini</h1>
                <div className="flex space-x-6">
                    <a href="https://github.com/glunghini" target="_blank" rel="noopener noreferrer"><img src="/imggithub.png" alt="GitHub Logo" className="w-8 h-8" /></a>
                    <a href="https://www.instagram.com/guilunghini/" target="_blank" rel="noopener noreferrer"><img src="/imginsta.png" alt="Instagram Logo" className="w-8 h-8" /></a>
                    <a href="https://br.linkedin.com/in/guilherme-lunghini-teixeira-a540a02b3" target="_blank" rel="noopener noreferrer"><img src="/imglinkedin.png" alt="LinkedIn Logo" className="w-8 h-8" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
