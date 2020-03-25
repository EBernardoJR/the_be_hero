import React from 'react';
//icones
import { FiLogIn } from 'react-icons/fi'
import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import './styles.css';

export default function Logon(){
 
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Logo"/>

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Seu id" />
                    <button type="submit" className="button">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color='#e02041'/>
                        Não tenho cadastro</a>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )

}
