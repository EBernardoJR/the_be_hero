import React, { useState} from 'react';
import { Link } from 'react-router-dom'
//icones
import { FiLogIn } from 'react-icons/fi'
import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import './styles.css';
import api from '../../services/api'


export default function Logon({ history }){

    const [ id, setId ] = useState('')

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('session', { id })

            //salvando no storage
            localStorage.setItem('ongId', id) 
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')

        }catch{
            alert('Falha no login')
        }


    }
 
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Seu id" value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>
                    {/* se usar o 'a' a pag faz reload */}
                    <Link to="/register" className='back-link'>
                        <FiLogIn size={16} color='#e02041'/>
                        Não tenho cadastro</Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )

}
