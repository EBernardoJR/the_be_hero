import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiPower,  FiTrash2 } from 'react-icons/fi'
import './styles.css'


export default function Profile({ match }){
    return(
    <div className="profile-container">
        <header>
            <img src={logo} alt="Be The Hero"/>
    <span>Bem Vindo, {localStorage.getItem('ongName')}</span>

            <Link to="/cases/new" className="button">Cadastar novo caso</Link>
            <button type="button">
                <FiPower size={18} color='e02041'/>
            </button>
        </header>
        <h1>Casos cadastrados</h1>
        <ul>
            <li>
                <strong>CASO:</strong>
                <p>Caso Teste</p>
                <strong>DESCRIÇÃO: </strong>
                <p>Descrição teste</p>
                <strong>VALOR: </strong>
                <p>R$ 120,22</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>

            <li>
                <strong>CASO:</strong>
                <p>Caso Teste</p>
                <strong>DESCRIÇÃO: </strong>
                <p>Descrição teste</p>
                <strong>VALOR: </strong>
                <p>R$ 120,22</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>

            <li>
                <strong>CASO:</strong>
                <p>Caso Teste</p>
                <strong>DESCRIÇÃO: </strong>
                <p>Descrição teste</p>
                <strong>VALOR: </strong>
                <p>R$ 120,22</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>

            <li>
                <strong>CASO:</strong>
                <p>Caso Teste</p>
                <strong>DESCRIÇÃO: </strong>
                <p>Descrição teste</p>
                <strong>VALOR: </strong>
                <p>R$ 120,22</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
            </li>
        </ul>
    </div>
    )
}