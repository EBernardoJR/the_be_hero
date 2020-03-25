import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowDownLeft } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import  './styles.css';

export default function NewCase (){

    return (
        <div className="new-case-container"><div className="content">
        <section>
            <img src={logo} alt="be the hero"/>
            <h1>Cadastrar novo Caso</h1>
            <p>Descreva o caso Detalhadamente para encontrar um herói capaz de resolvir isso.</p>
            <Link to="/profile/1" className='back-link'>
                <FiArrowDownLeft size={16} color='#e02041'/>
                Voltar para Home</Link>
        </section>
        <form>
            <input placeholder="Titulo" />
            <textarea placeholder="Descrição"/>
            <input placeholder="Valor R$" />

            <button className="button" type='submit'>Cadastrar</button>
        </form>
    </div></div>
    )
}
