import { useSetRecoilState } from 'recoil'
import { listaDeEventosState } from '@/state/atom'
import { IEvento } from '@/interfaces/IEvento'

export const useExcluirEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    const excluirEvento = (evento: IEvento) => {
        setListaDeEventos(listaAnterior =>
            listaAnterior.filter(
                eventoAnterior => eventoAnterior.id !== evento.id
            )
        )
    }

    return {
        excluirEvento
    }
}
