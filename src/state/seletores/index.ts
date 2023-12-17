import { selector } from 'recoil'
import { filtroDeEventos, listaDeEventosState } from '@/state/atom'

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

    }
})
