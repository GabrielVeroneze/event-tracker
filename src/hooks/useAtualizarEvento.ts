import { useSetRecoilState } from 'recoil'
import { listaDeEventosState } from '@/state/atom'
import { IEvento } from '@/interfaces/IEvento'

interface IEventoAtualizado {
    id?: number
    completo?: boolean
    inicio?: Date
    fim?: Date
}

export const useAtualizarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    const atualizarEvento = (evento: IEventoAtualizado) => {
        setListaDeEventos(listaAnterior =>
            listaAnterior.map(eventoAnterior => {
                if (eventoAnterior.id === evento.id) {
                    return {
                        ...eventoAnterior,
                        ...evento
                    }
                }
                return eventoAnterior
            })
        )
    }

    return {
        atualizarEvento
    }
}
