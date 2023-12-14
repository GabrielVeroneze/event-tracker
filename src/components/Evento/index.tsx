import { useSetRecoilState } from 'recoil'
import { listaDeEventosState } from '@/state/atom'
import { IEvento } from '@/interfaces/IEvento'
import EventoCheckbox from './EventoCheckbox'
import styles from './Evento.module.scss'

const Evento: React.FC<{
    evento: IEvento
    aoAlterarStatus: (id: number) => void
}> = ({ evento, aoAlterarStatus }) => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    const excluirEvento = () => {
        setListaDeEventos(eventosAntigos =>
            eventosAntigos.filter(
                eventoAntigo => eventoAntigo.id !== evento.id
            )
        )
    }

    return (
        <div
            className={`
                ${styles.evento}
                ${evento.completo ? styles.completo : ''}
            `}
        >
            <EventoCheckbox evento={evento} aoAlterarStatus={aoAlterarStatus} />
            <h3 className={styles.descricao}>
                {evento.descricao} - {evento.inicio.toLocaleDateString()}
            </h3>
            <i
                className="far fa-times-circle fa-2x"
                onClick={excluirEvento}
            ></i>
        </div>
    )
}

export default Evento
