import S from './inicio.module.scss'

export default function Inicio(){
    return(
        <main>
            <section>
                <section className={S.banner}>
                    <h2>Venha fazer parte da maior rede de Doação de Livros!</h2>
                </section>
                <section className={S.devoDoar}>
                    <div>
                        <h2>Por que devo Doar?</h2>
                    </div>
                    <section>
                        <article>
                            <img src="" alt="" />
                            <p></p>
                        </article>
                        <article>
                            <img src="" alt="" />
                            <p></p>
                        </article>
                        <article>
                            <img src="" alt="" />
                            <p></p>
                        </article>
                        <article>
                            <img src="" alt="" />
                            <p></p>
                        </article>
                    </section>

                </section>

            </section>
        </main>
    )
}