import { IEvento } from '@/interfaces/IEvento'
import Filtro from '@/components/Filtro'
import Evento from '@/components/Evento'
import styles from './ListaDeEventos.module.scss'

const ListaDeEventos: React.FC<{
    eventos: IEvento[]
    aoAlterarStatus: (id: number) => void
    aoDeletarEvento: (id: number) => void
    aoFiltroAplicado: (data: Date | null) => void
}> = ({ eventos, aoDeletarEvento, aoAlterarStatus, aoFiltroAplicado }) => {
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
