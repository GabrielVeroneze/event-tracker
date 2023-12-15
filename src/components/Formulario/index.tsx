import { useState } from 'react'
import { useAdicionarEvento } from '@/hooks/useAdicionarEvento'
import styles from './Formulario.module.scss'

const Formulario: React.FC = () => {
    const { adicionarEvento } = useAdicionarEvento()

    const [descricao, setDescricao] = useState<string>('')
    const [dataInicio, setDataInicio] = useState<string>('')
    const [horaInicio, setHoraInicio] = useState<string>('')
    const [dataFim, setDataFim] = useState<string>('')
    const [horaFim, setHoraFim] = useState<string>('')

    const montarData = (data: string, hora: string) => {
        const dataString = data.slice(0, 10)
        return new Date(`${dataString}T${hora}`)
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            adicionarEvento({
                descricao,
                inicio: montarData(dataInicio, horaInicio),
                fim: montarData(dataFim, horaFim),
                completo: false,
            })

            setDescricao('')
            setDataInicio('')
            setHoraInicio('')
            setDataFim('')
            setHoraFim('')
        } catch (erro) {
            alert(erro)
        }
    }

    return (
        <form className={styles.formulario} onSubmit={handleFormSubmit}>
            <h3 className={styles.titulo}>Novo evento</h3>
            <label>Descrição</label>
            <input
                type="text"
                name="descricao"
                id="descricao"
                className={styles.input}
                onChange={evento => setDescricao(evento.target.value)}
                placeholder="Descrição"
                value={descricao}
                autoComplete="off"
                required
            />
            <label>Data de início</label>
            <div className={styles.campos}>
                <input
                    type="date"
                    name="dataInicio"
                    className={styles.input}
                    onChange={evento => setDataInicio(evento.target.value)}
                    value={dataInicio}
                    required
                />
                <input
                    type="time"
                    name="horaInicio"
                    className={styles.input}
                    onChange={evento => setHoraInicio(evento.target.value)}
                    value={horaInicio}
                    required
                />
            </div>
            <label>Data de término</label>
            <div className={styles.campos}>
                <input
                    type="date"
                    name="dataFim"
                    className={styles.input}
                    onChange={evento => setDataFim(evento.target.value)}
                    value={dataFim}
                    required
                />
                <input
                    type="time"
                    name="horaFim"
                    className={styles.input}
                    onChange={evento => setHoraFim(evento.target.value)}
                    value={horaFim}
                    required
                />
            </div>
            <button className={styles.botao}>Salvar</button>
        </form>
    )
}

export default Formulario
