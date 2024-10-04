import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 text-black p-4 w-auto h-16 shadow-2xl">
            <div className="flex justify-around items-center h-full space-x-8">
                <Link to={'/'}><h1 className="text-xl font-bold">Portfólio Guilherme Lunghini</h1></Link>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link to='/Projetos' className="hover:text-blue-500 transition duration-200">Projetos</Link>
                        </li>
                        <li> 
                            <Link to='/Contato' className="hover:text-blue-500 transition duration-200">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
