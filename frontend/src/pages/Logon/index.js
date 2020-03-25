import React from 'react';
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
                    <button type="submit">Entrar</button>
                    <a href="/register">Não tenho cadastro</a>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )

}
