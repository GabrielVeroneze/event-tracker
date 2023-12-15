import { useSetRecoilState } from 'recoil'
import { listaDeEventosState } from '@/state/atom'
import { IEvento } from '@/interfaces/IEvento'
import { obterId } from '@/utils/gerarIdUnico'

export const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    const adicionarEvento = (evento: IEvento) => {
        const hoje = new Date()

        if (evento.inicio < hoje) {
            throw new Error(
                'Eventos não podem ser cadastrados com data menor do que a atual.'
            )
        }

        evento.id = obterId()
        setListaDeEventos(listaAnterior => [...listaAnterior, evento])
    }

    return {
        adicionarEvento
    }
}
