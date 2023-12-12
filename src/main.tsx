import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/sass/_reset.scss'
import '@/sass/_global.scss'
import Inicio from '@/pages/Inicio'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Inicio />
    </React.StrictMode>
)
