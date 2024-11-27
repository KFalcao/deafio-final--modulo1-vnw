import S from './queroDoar.module.scss'
import livroIcon from '../../assets/book-icon.png'

export default function QueroDoar(){
    return(
        <section className={S.principal}>
            <section className={S.informacoes}>
            <h2>Por favor, preencha o formulário com suas informações e as informações do Livro.</h2>
            <form action=""className={S.boxFormulario}>
                <div>
                    <img src={livroIcon} alt="Icone de livro aberto" />
                    <h3>Informações do Livro</h3>
                </div>
                <input type="text" placeholder='Título'/>
                <input type="text" placeholder='Categoria'/>
                <input type="text" placeholder='Autor'/>
                <input type="text" placeholder='Link da Imagem'/>

                <button>Doar</button>            
            </form>
            </section>
        </section>
    )
}