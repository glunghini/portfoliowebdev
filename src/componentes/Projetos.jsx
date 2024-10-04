import React from "react";
import { Link } from 'react-router-dom'
import Cards from "./CardsProjetos";

const Projetos = () => {
    const conteudo = [
        {
            titulo: 'Projeto 1',
            descricao:'Esse aqui foi um projeto feito exclusivamente por mim que se trata de uma landing page de um case que busca acabar com a poluição nos mares. Nesse projetos temos um carrosel e um header com váris opções que se clicadas levam para fotos abaixo na página explicando o que a empresa BlueWave faz para combater a poluição nos oceanos.',
            imagem: '/fotosite1.png'
        },
        {
            titulo: 'Projeto 2',
            descricao:'Já esse é um projeto de um case de uma vinheria que busca entrar no mundo e-commerce, foi um dos meus primeiros projetos e por mais que seja básico tem um lugar pra ele nessa aba de projeto, vito que tive um grande esforço para faze-lo.',
            imagem: '/fotosite2.png'
        },
        {
            titulo: 'Projeto 3',
            descricao:'Esse foi para um trabalho para a mahindra, ele não foi feito todo por mim, apenas fiz a parte da loja que é a que está sendo exibida na imagem. É um projeto bem básico porém foi meu primeiro carrosel feito.',
            imagem: '/fotosite3.png'
        }
    ]
    return (
        <div>
            <Cards dados={conteudo}/>
        </div>
    )
}

export default Projetos