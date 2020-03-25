import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowDownLeft } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import  './styles.css';
import api from '../../services/api'


export default function NewCase ({ history }){

    useEffect(()=>{
        if(!localStorage.getItem('ongId')){
            history.push('/')
        }
    }, [])

    const [title, setTitle] = useState('')
    const [ description, setDescription ] = useState('')
    const [value, setValue ] = useState('')

    async function newCase(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }
        try{
            await api.post('cases', data, {
                headers:{
                    Authorization: localStorage.getItem('ongId')
                }
            })

            alert('Caso cadastrado com sucesso')
        }catch(err){
            alert('Houve um erro no cadastro do novo caso')
        }
        history.push('/profile')
    }

    return (
        <div className="new-case-container"><div className="content">
        <section>
            <img src={logo} alt="be the hero"/>
            <h1>Cadastrar novo Caso</h1>
            <p>Descreva o caso Detalhadamente para encontrar um herói capaz de resolvir isso.</p>
            <Link to="/profile" className='back-link'>
                <FiArrowDownLeft size={16} color='#e02041'/>
                Voltar para Home</Link>
        </section>
        <form onSubmit={newCase}>
            <input placeholder="Titulo" 
            value={title}
            onChange={e=> setTitle(e.target.value)}
            />
            <textarea placeholder="Descrição"
            value={description}
            onChange={e=> setDescription(e.target.value)}
            />
            <input placeholder="Valor R$"
            value={value}
            onChange={e=> setValue(e.target.value)}
             />

            <button className="button" type='submit'>Cadastrar</button>
        </form>
    </div></div>
    )
}
