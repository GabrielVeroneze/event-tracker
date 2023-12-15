import { useSetRecoilState } from 'recoil'
import { listaDeEventosState } from '@/state/atom'
import { IEvento } from '@/interfaces/IEvento'

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    
    const alterarStatus = () => {
        setListaDeEventos(ListaAnterior => 
            ListaAnterior.map(eventoAnterior => {
                if (eventoAnterior.id === evento.id) {
                    return {
                        ...eventoAnterior,
                        completo: !eventoAnterior.completo
                    }
                }
                return eventoAnterior
            })
        )
    }

    const estilos = [
        'far',
        'fa-2x',
        evento.completo ? 'fa-check-square' : 'fa-square',
    ]

    return (
        <i
            className={estilos.join(' ')}
            onClick={alterarStatus}
        ></i>
    )
}

export default EventoCheckbox
