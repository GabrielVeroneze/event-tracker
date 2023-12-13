import { useRecoilValue } from 'recoil'
import { listaDeEventosState } from '@/state/atom'
import Filtro from '@/components/Filtro'
import Evento from '@/components/Evento'
import styles from './ListaDeEventos.module.scss'

const ListaDeEventos: React.FC<{
    aoAlterarStatus: (id: number) => void
    aoDeletarEvento: (id: number) => void
    aoFiltroAplicado: (data: Date | null) => void
}> = ({ aoDeletarEvento, aoAlterarStatus, aoFiltroAplicado }) => {
    const eventos = useRecoilValue(listaDeEventosState)

    return (
        <section>
            <Filtro aoFiltroAplicado={aoFiltroAplicado} />
            <div className={styles.scroll}>
                {eventos.map(evento => (
                    <Evento
                        aoAlterarStatus={aoAlterarStatus}
                        aoDeletarEvento={aoDeletarEvento}
                        evento={evento}
                        key={evento.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default ListaDeEventos
