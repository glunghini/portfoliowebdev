import React from "react";

const Miolo = () => {
    return (
        <>
            <section className='flex justify-center mt-10 '>
                <div className='bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300 bg-opacity-75 text-black content w-2/3 mx-auto p-4 rounded-t-md'>
                    <h2 className='font-bold mt-2 text-3xl'>Sobre mim</h2>
                    <p className='mt-6'>Meu nome é Guilherme Lunghini Teixeira, tenho 18 anos e estou dando os primeiros passos na faculdade de Engenharia de Software. Desde pequeno, sempre fui fascinado por tecnologia e programação, e agora, estou explorando esse universo de maneira mais profunda. Recentemente, comecei a aprender HTML, CSS e JavaScript, além de me aventurar no desenvolvimento de aplicações com React. Cada novo conceito que descubro me motiva a seguir em frente e aprimorar minhas habilidades, enquanto construo projetos que refletem minha criatividade e aprendizado.</p>
                    <h2 className='font-bold mt-4 text-3xl'>O que busco?</h2>
                    <p className='mt-6'>Estou determinado a transformar minha paixão pela tecnologia em uma carreira gratificante. Meu objetivo é me tornar um desenvolvedor de software, contribuindo para soluções inovadoras que impactem a vida das pessoas. Acredito que, com dedicação e constante aprendizado, posso me destacar nesta área dinâmica e em constante evolução. Estou animado para enfrentar os desafios que virão e ansioso para construir um futuro próspero na engenharia de software.</p>
                </div>
            </section>
            <section className='flex justify-center mb-20'>
                <div className='bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300 bg-opacity-75 text-black content w-2/3 mx-auto p-4 rounded-b-md'>
                    <h1 className='font-bold mt-10 text-5xl text-center'>Me encontre em</h1>
                    <div className='flex mb-10 justify-around space-x-8'>
                        <a href="https://github.com/glunghini" target="_blank" rel="noopener noreferrer">
                            <img src="/imggithub.png" alt="GitHub Logo" className='h-56 mt-10 mx-auto' />
                        </a>
                        <a href="https://www.instagram.com/guilunghini/" target="_blank" rel="noopener noreferrer">
                            <img src="/imginsta.png" alt="Instagram Logo" className='h-56 mt-10 mx-auto' />
                        </a>
                        <a href="https://br.linkedin.com/in/guilherme-lunghini-teixeira-a540a02b3" target="_blank" rel="noopener noreferrer">
                            <img src="/imglinkedin.png" alt="LinkedIn Logo" className='h-56 mt-10 mx-auto' />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Miolo;
