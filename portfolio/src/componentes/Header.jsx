import React from "react";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black p-4 w-auto h-16">
            <div className="flex justify-around items-center h-full space-x-8">
                <h1 className="text-xl font-bold">Portfólio Guilherme Lunghini</h1>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">Projetos</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
