import React, { useEffect } from 'react'
import './compte.css'
import axios from 'axios'

function Compte() {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    useEffect(() => {
        if (!user) {
            window.location.href = '/connexion'
        }
    }, [])
    return (
        <div className='ml-3 mt-3 ' >
            <h1>Profil</h1>
            <br />
            <div className='bs' style={{textAlign:'left'}}>
                <h3>Nom utilisateur:{user.userName}</h3>
                <h3>Email:{user.email}</h3>
            </div>

        </div>
    )
}
export default Compte;


export function Reserves() {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    useEffect(async()=>{
        const space = axios.post('http://localhost:5000/getbookingbyuserid', {userid: user.userId}).data
    },[])
    return (
        <div>Mes réservations</div>
    )
}
