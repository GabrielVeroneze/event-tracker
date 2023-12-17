import { useRecoilValue } from 'recoil'
import { eventosFiltradosState } from '@/state/seletores'

export const useListaDeEventos = () => {
    const eventos = useRecoilValue(eventosFiltradosState)

    return {
        eventos
    }
}
