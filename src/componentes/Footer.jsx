import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 text-black p-6 w-full shadow-2xl mt-32">
            <div className="flex flex-col md:flex-row justify-between items-center h-full mx-auto w-full md:w-3/4 text-center md:text-left">
                <h1 className="text-base md:text-xl font-bold mb-4 md:mb-0">Desenvolvido por Guilherme Lunghini</h1>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/glunghini" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare className="w-8 h-8" />
                    </a>
                    <a href="https://www.instagram.com/guilunghini/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-8 h-8" />
                    </a>
                    <a href="https://br.linkedin.com/in/guilherme-lunghini-teixeira-a540a02b3" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
