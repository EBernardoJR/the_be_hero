import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiPower,  FiTrash2 } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'

export default function Profile({ history }){

    const [cases, setCases ] = useState([])

    function loadCases(){
        api.get('profile', {
            headers: {
                Authorization: localStorage.getItem('ongId')
            }
        }).then(response => {
            setCases(response.data)
        })
    }

    useEffect(()=> {
        //buscando os casos da ong
        if(!localStorage.getItem('ongId')){
            history.push('/')
        }
        loadCases()
    }, [])


    async function handleDeleteCase(id){
        try{
            //deletando caso
            await api.delete(`cases/${id}`, {
                //header de autorização
                headers:{
                    Authorization: localStorage.getItem('ongId')
                }
            })

            loadCases()
            //ou
            //setCases(cases.filter(cas=> cas.id !== id))
        }catch(err){
            alert('Erro ao deletar caso')
        }
    }


    function logout(){
        localStorage.clear()
        history.push('/')
    }

    return(
    <div className="profile-container">
        <header>
            <img src={logo} alt="Be The Hero"/>
            <span>Bem Vindo, {localStorage.getItem('ongName')}</span>

            <Link to="/cases/new" className="button">Cadastar novo caso</Link>
            <button type="button" onClick={logout}>
                <FiPower size={18} color='e02041'/>
            </button>
        </header>
        <h1>Casos cadastrados</h1>
        <ul>
            

                {
                    cases.map( cas => (
                    <li key={cas.id}>
                        <strong>CASO:</strong>
                        <p>{cas.title}</p>
                        <strong>DESCRIÇÃO: </strong>
                        <p>{cas.description}</p>
                        <strong>VALOR: </strong>
                        <p>R$ {cas.value}</p>
                        <button onClick={() => handleDeleteCase(cas.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    ))
                }
               

           
        </ul>
    </div>
    )
}