import {livros} from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../img/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
   background-color: #EBECEE;
   padding-bottom: 20px;
   display: flex;
   flex-direction: column;
`
const NovosLivrosContainer = styled.div`
   margin-top: 30px;
   display: flex;
   width: 100%;
   justify-content: center;
   cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo
            cor="#eb9b00"
            tamanhoFonte="36px">
                Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
                <CardRecomenda
                titulo="Talvez você se interesse por"
                Subtitulo="Angular 11"
                Descricao="construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
                />

            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos