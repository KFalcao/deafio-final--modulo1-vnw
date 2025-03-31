import S from './doados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://desafio-api-wae0.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(()=>{
        getLivros()
    }, [livros])

    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
                {livros.map((item)=>(
                    <article key={item.id}>
                        <img src={item.imagem_url} alt="capa do livro" />
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}