import { useRecoilValue } from 'recoil'
import { listaDeEventosState } from '@/state/atom'

export const useListaDeEventos = () => {
    const eventos = useRecoilValue(listaDeEventosState)

    return {
        eventos
    }
}
