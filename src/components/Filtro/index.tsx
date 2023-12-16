import { useState } from 'react'
import styles from './Filtro.module.scss'

    const [data, setData] = useState<string>('')

    const handleFormSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        }

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
            <button className={styles.botao}>Filtrar</button>
        </form>
    )
}

export default Filtro
