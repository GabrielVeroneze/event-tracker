import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { filtroDeEventos } from '@/state/atom'
import { IFiltroDeEventos } from '@/interfaces/IFiltroDeEventos'
import styles from './Filtro.module.scss'

const Filtro: React.FC = () => {
    const [data, setData] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const setFiltroDeEvento = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos)

    const handleFormSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const filtro: IFiltroDeEventos = {}

        if (data) {
            filtro.data = new Date(data)
        } else {
            filtro.data = null
        }

        filtro.status = status

        setFiltroDeEvento(filtro)
    }

    return (
        <form className={styles.filtro} onSubmit={handleFormSubmit}>
            <h3 className={styles.titulo}>Filtrar por data</h3>
            <input
                type="date"
                name="data"
                className={styles.input}
                onChange={evento => setData(evento.target.value)}
                placeholder="Por data"
                value={data}
            />
            <h3 className={styles.titulo}>Filtrar por estado</h3>
            <select
                className={styles.input}
                value={status}
                onChange={evento => setStatus(evento.target.value)}
            >
                <option value=""></option>
                <option value="completo">Completo</option>
                <option value="incompleto">Incompleto</option>
            </select>
            <button className={styles.botao}>Filtrar</button>
        </form>
    )
}

export default Filtro
